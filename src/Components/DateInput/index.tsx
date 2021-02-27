import React, { useEffect, useState } from 'react'
import { Form, Input } from 'semantic-ui-react'
import Calendar from './Calendar'
import { DateInputProps, DateInputValue } from './types'
import { strToDate, maskDate, dateToLocale } from './functions'

const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  label,
  width,
  ...props
}) => {
  console.log(value)
  if (!(value instanceof Date)) {
    value = undefined
    // console.log('x')
  }
  const calendarID = `Calendar_${props.fieldname}`
  const inputID = `Input_${props.fieldname}`

  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState<DateInputValue>(value)
  const [keyboardInput, setKeyboardInput] = useState<string | null>(null)

  useEffect(() => {
    if (value !== date) setDate(value)
  }, [value, date])

  const setDateAndHide = (
    date: DateInputValue,
    event: React.SyntheticEvent
  ) => {
    setShowCalendar(false)
    setKeyboardInput(null)
    setDate(date)
    if (onChange) onChange(event, { value: date })
  }

  const handleOnBlur = (event: React.FocusEvent) => {
    const relatedTarget: EventTarget | null = event.relatedTarget
    const target = relatedTarget as HTMLElement

    if (
      target?.id !== calendarID &&
      target?.previousElementSibling?.id !== inputID
    ) {
      if (keyboardInput !== null)
        setDateAndHide(strToDate(keyboardInput), event)
      else setShowCalendar(false)
    }
  }

  let strDate
  if (keyboardInput !== null) strDate = maskDate(keyboardInput)
  else strDate = dateToLocale(date)

  const InputClickableIcons = {
    calendar: {
      icon: {
        name: 'calendar outline',
        tabIndex: 0,
        link: true,
        bordered: true,
        onClick: () => setShowCalendar(!showCalendar),
      },
    },
    delete: {
      icon: {
        name: 'delete',
        tabIndex: 0,
        link: true,
        bordered: true,
        onClick: (e: any) => setDateAndHide(undefined, e),
      },
    },
  }

  return (
    <>
      <Form.Field onBlur={handleOnBlur} width={width}>
        <label>{label}</label>
        <Input
          id={inputID}
          maxLength={10}
          onClick={() => !showCalendar && setShowCalendar(true)}
          onChange={event => setKeyboardInput(event.target.value)}
          value={strDate}
          {...(strDate
            ? InputClickableIcons.delete
            : InputClickableIcons.calendar)}
          {...props}></Input>
        {showCalendar && (
          <Calendar
            // onBlur={() => setShow(false)}
            id={calendarID}
            setDate={setDateAndHide}
            date={date}
          />
        )}
      </Form.Field>
    </>
  )
}

export default DateInput
