import React, { useEffect, useState } from "react"

import { Form, Input } from "semantic-ui-react"

import Calendar from "./Calendar"
import { DateInputProps, DateInputValue } from "./types"
import { strToDate, maskDate, dateToLocale } from "./functions"

const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  label,
  width,
  ...props
}) => {
  if (!(value instanceof Date)) value = undefined

  const inputID = `Input_${props.fieldname}`
  const calendarID = `Calendar_${props.fieldname}`

  const [date, setDate] = useState<DateInputValue>(value)
  const [showCalendar, setShowCalendar] = useState(false)
  const [keyboardInput, setKeyboardInput] = useState<string | null>(null)

  useEffect(() => {
    if (value !== date) setDate(value)
  }, [value, date])

  const setDateAndHideCalendar = (
    date: DateInputValue,
    event: React.SyntheticEvent
  ) => {
    setShowCalendar(false)
    setKeyboardInput(null)
    setDate(date)
    if (onChange) onChange(event, { value: date })
  }

  const handleOnBlur = (event: React.FocusEvent) => {
    const target = event.relatedTarget as HTMLElement

    if (
      target?.id !== calendarID &&
      target?.previousElementSibling?.id !== inputID
    ) {
      if (keyboardInput === null) setShowCalendar(false)
      else setDateAndHideCalendar(strToDate(keyboardInput), event)
    }
  }

  let strDate =
    keyboardInput == null ? dateToLocale(date) : maskDate(keyboardInput)

  const InputClickableIcons = {
    calendar: {
      icon: {
        name: "calendar outline",
        tabIndex: 0,
        link: true,
        bordered: true,
        onClick: () => setShowCalendar(!showCalendar),
      },
    },
    delete: {
      icon: {
        name: "delete",
        tabIndex: 0,
        link: true,
        bordered: true,
        onClick: (e: React.MouseEvent) => setDateAndHideCalendar(undefined, e),
      },
    },
  }

  return (
    <Form.Field onBlur={handleOnBlur} width={width}>
      <label>{label}</label>
      <Input
        id={inputID}
        maxLength={10}
        onClick={() => !showCalendar && setShowCalendar(true)}
        onChange={(event) => setKeyboardInput(event.target.value)}
        value={strDate}
        {...(strDate
          ? InputClickableIcons.delete
          : InputClickableIcons.calendar)}
        {...props}
      />
      {showCalendar && (
        <Calendar
          id={calendarID}
          setDate={setDateAndHideCalendar}
          date={date}
        />
      )}
    </Form.Field>
  )
}

export default DateInput
