import React, { useState } from "react"
import "./styles.css"

import { CalendarMonth, CalendarProps } from "./types"
import { monthNames } from "./consts"
import {
  CalendarContainer,
  CalendarButtonsContainer,
  CalendarButton,
  CalendarLabel,
  CalendarDays,
} from "./components"

const Calendar: React.FC<CalendarProps> = ({ setDate, date, id }) => {
  if (date === undefined) date = new Date()

  const [calendarMonth, setCalendarMonth] = useState<CalendarMonth>({
    month: date.getMonth(),
    year: date.getFullYear(),
  })

  const changeMonthBy = (amount: number) => () => {
    let { month, year } = calendarMonth
    month += amount

    year = year + Math.floor(month / 12)
    month = (month % 12) + (month % 12 < 0 ? 12 : 0)

    setCalendarMonth({ month, year })
  }

  return (
    <CalendarContainer id={id}>
      <CalendarButtonsContainer>
        <CalendarButton
          iconName="angle double left"
          onClick={changeMonthBy(-12)}
        />
        <CalendarButton iconName="angle left" onClick={changeMonthBy(-1)} />

        <CalendarLabel>
          {monthNames[calendarMonth.month]} {calendarMonth.year}
        </CalendarLabel>

        <CalendarButton iconName="angle right" onClick={changeMonthBy(1)} />
        <CalendarButton
          iconName="angle double right"
          onClick={changeMonthBy(12)}
        />
      </CalendarButtonsContainer>

      <CalendarDays
        selectedDate={date}
        calendarMonth={calendarMonth}
        onClick={(event: React.MouseEvent, day: Date) => setDate(day, event)}
      />
    </CalendarContainer>
  )
}

export default Calendar
