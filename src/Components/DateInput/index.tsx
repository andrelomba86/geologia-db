import React, { useEffect, useState } from 'react'
import { Form, Input } from 'semantic-ui-react'
import Calendar from './Calendar'
import { DateInputType } from './types'

import { convertDate, dateMask, toLocale } from './functions'

/* CORRIGIR tipos: any .............. */

const DateInput = ({ value, onChange, ...props }: any) => {
  // const input = useRef<Input>()
  const [showCalendar, setShowCalendar] = useState(false)
  const calendarID = `Calendar_${props.fieldname}`

  if (!(value instanceof Date)) value = undefined

  // delete props.onChange

  const [date, setDate] = useState<DateInputType>(value)
  const [manualInput, setManualInput] = useState<string | null>(null)
  useEffect(() => {
    if (value !== date) setDate(value)
  }, [value, date])

  const setDateAndHide = (dateValue: DateInputType, hide: boolean = true) => {
    setShowCalendar(!hide)
    setManualInput(null)
    setDate(dateValue)
    onChange(null, { value: dateValue })
  }

  const onBlur = (event: React.FocusEvent) => {
    const relatedTarget: EventTarget | null = event.relatedTarget
    if ((relatedTarget as HTMLElement)?.id !== calendarID) {
      if (manualInput !== null) {
        setDate(convertDate(manualInput))
        setManualInput(null)
      }
      setShowCalendar(false)
    }
  }
  // console.log('<---')
  // console.log('showCalendar', showCalendar)
  // console.log('date', date)
  // console.log('manual input', manualInput)
  // console.log('value', value)
  // console.log('--->')

  const { label, width } = props
  delete props.label
  delete props.width

  let strDate
  if (manualInput !== null) strDate = dateMask(manualInput)
  else strDate = toLocale(date)

  return (
    <>
      <Form.Field onBlur={onBlur} width={width}>
        <label>{label}</label>
        <Input
          maxLength={10}
          onClick={() => !showCalendar && setShowCalendar(true)}
          {...(!strDate && {
            icon: {
              name: 'calendar outline',
              link: true,
              bordered: true,
              onClick: () => setShowCalendar(!showCalendar),
            },
          })}
          {...(strDate && {
            icon: {
              name: 'delete',
              link: true,
              bordered: true,
              onClick: () => setDateAndHide(undefined),
            },
          })}
          onChange={e => {
            // strDate = e.target.value
            console.log('manual')
            setManualInput(e.target.value)
          }}
          value={strDate}
          {...props}></Input>
        {showCalendar && (
          <Calendar
            // onBlur={() => setShow(false)}
            id={calendarID}
            setDate={setDateAndHide}
            setShow={setShowCalendar}
            date={date}
          />
        )}
      </Form.Field>
    </>
  )
}

export default DateInput
