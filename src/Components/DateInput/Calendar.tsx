import React, { useState } from 'react'
import { calendarCSS } from './styles'
import { CalendarStateType, CalendarProps, CalendarShift } from './types'
import { createMonthArray, isSameDate } from './functions'
import { monthNames } from './consts'
import {
  CalendarContainer,
  CalendarButtonsContainer,
  CalendarButton,
  CalendarLabel,
  CalendarHeader,
  CalendarDays,
} from './components'

const Calendar: React.FC<CalendarProps> = ({ setDate, date, id }) => {
  if (date === undefined) date = new Date()

  const [calendarMonth, setCalendarMonth] = useState<CalendarStateType>({
    month: date.getMonth(),
    year: date.getFullYear(),
  })

  const changeMonth = (amount: CalendarShift) => {
    let { month, year } = calendarMonth
    month += amount

    year = year + Math.floor(month / 12)
    month = (month % 12) + (month % 12 < 0 ? 12 : 0)

    setCalendarMonth({ month, year })
  }

  const calendarLabel = ` ${monthNames[calendarMonth.month]} ${
    calendarMonth.year
  }`

  return (
    <>
      <style>{calendarCSS}</style>
      {/* <div className="cal-container" tabIndex={0} id={id}> */}
      <CalendarContainer id={id}>
        <CalendarButtonsContainer>
          <CalendarButton
            iconName="angle double left"
            onClick={() => changeMonth(CalendarShift.previousYear)}
          />
          <CalendarButton
            iconName="angle left"
            onClick={() => changeMonth(CalendarShift.previousMonth)}
          />

          <CalendarLabel>{calendarLabel}</CalendarLabel>

          <CalendarButton
            iconName="angle right"
            onClick={() => changeMonth(CalendarShift.nextMonth)}
          />
          <CalendarButton
            iconName="angle double right"
            onClick={() => changeMonth(CalendarShift.nextYear)}
          />
        </CalendarButtonsContainer>

        <CalendarHeader>
          <CalendarDays
            selectedDate={date}
            calendarMonth={calendarMonth}
            onClick={(event: React.MouseEvent, day: Date) =>
              setDate(day, event)
            }
          />
          {/* {createMonthArray(calendarMonth).map((day: Date, key: number) => (
            <div
              key={key}
              onClick={(event: React.MouseEvent) => setDate(day, event)}
              className={`
                cal-days
                ${day.getMonth() !== calendarMonth.month ? 'cal-days-grey' : ''}
                ${isSameDate(day, date) ? 'cal-day-selected' : ''}
              `}>
              {day.getDate()}
            </div>
          ))} */}
        </CalendarHeader>
      </CalendarContainer>
    </>
  )
}

export default Calendar
