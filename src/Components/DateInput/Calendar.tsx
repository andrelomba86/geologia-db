import React, { ReactElement, useState } from 'react'
import { calendarCSS } from './styles'
import { Icon } from 'semantic-ui-react'
import {
  monthYear,
  monthArrayType,
  calendarStateType,
  CalendarProps,
  DateInputType,
} from './types'

const Calendar = ({
  setDate,
  setShow,
  date,
  id,
}: CalendarProps): ReactElement => {
  if (date === undefined) date = new Date()

  // console.log('calendar', date)
  const [calendarState, setCalendarState] = useState<calendarStateType>({
    currentDate: {
      // day: today.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    },
    selectedDate: date,
    // REMOVER SELECTEDDATE
  })

  function isSameDate(a: DateInputType, b: DateInputType) {
    if (a === undefined || b === undefined) return false
    return (
      Math.abs(a.getTime() - b.getTime()) < 1000 * 3600 * 24 &&
      a.getDay() === b.getDay()
    )
  }

  const changeMonthAndYear = (monthShift: number, yearShift: number = 0) => {
    let month = calendarState.currentDate.month + monthShift
    let year = calendarState.currentDate.year + yearShift

    if (month < 0) {
      month = 11
      year = year - 1
    }
    if (month > 11) {
      month = 0
      year = year + 1
    }
    // console.log(month, year)

    setCalendarState({
      ...calendarState,
      currentDate: {
        month: month,
        year: year,
      },
    })
  }

  return (
    <>
      <style>{calendarCSS}</style>
      <div className="cal-container" tabIndex={0} id={id}>
        <div className="cal-buttons-container">
          <div className="cal-button" onClick={() => changeMonthAndYear(0, -1)}>
            <Icon name="angle double left" />
            {/* &lt;&lt; */}
          </div>
          <div className="cal-button" onClick={() => changeMonthAndYear(-1)}>
            <Icon name="angle left" />
          </div>
          <div className="cal-label">
            {monthNames[calendarState.currentDate.month]}{' '}
            {calendarState.currentDate.year}
          </div>
          <div className="cal-button" onClick={() => changeMonthAndYear(1)}>
            <Icon name="angle right" />
          </div>
          <div className="cal-button" onClick={() => changeMonthAndYear(0, 1)}>
            <Icon name="angle double right" />
          </div>
        </div>
        <div className="cal-grid">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((item, key) => (
            <div className="cal-days-bold" key={key}>
              {item}
            </div>
          ))}
          {monthArray(calendarState.currentDate).map((day, key) => (
            <div
              key={key}
              onClick={() => {
                // setCalendarState({
                //   ...calendarState,
                //   selectedDate: day,
                // })
                setDate(day)
              }}
              className={`
              cal-days
              ${
                day.getMonth() !== calendarState.currentDate.month
                  ? 'cal-days-grey'
                  : ''
              }
              ${isSameDate(day, date) ? 'cal-day-selected' : ''}
              `}>
              {day.getDate()}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const monthArray = ({ month, year }: monthYear): monthArrayType => {
  let monthArr: monthArrayType = []
  let day = -6

  // Loop to set the initial day in the array
  for (; day <= 0; day++) if (new Date(year, month, day).getDay() === 0) break

  for (; monthArr.length < 42; day++) {
    let date = new Date(year, month, day)
    monthArr.push(date)
  }
  return monthArr
}

const monthNames = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]

export default Calendar
