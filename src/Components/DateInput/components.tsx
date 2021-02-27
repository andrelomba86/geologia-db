import React from 'react'
import { Icon } from 'semantic-ui-react'
import {
  CalendarContainerProps,
  CalendarButtonProps,
  CalendarStateType,
} from './types'
import { createMonthArray, isSameDate } from './functions'

export const CalendarContainer: React.FC<CalendarContainerProps> = ({
  id,
  children,
}) => (
  <div className="cal-container" tabIndex={0} id={id}>
    {children}
  </div>
)

export const CalendarButtonsContainer: React.FC = ({ children }) => (
  <div className="cal-buttons-container">{children}</div>
)

export const CalendarButton: React.FC<CalendarButtonProps> = ({
  children,
  iconName,
  ...props
}) => (
  <div className="cal-button" {...props}>
    <Icon name={iconName} />
    {children}
  </div>
)

export const CalendarLabel: React.FC = ({ children }) => (
  <div className="cal-label">{children}</div>
)

export const CalendarHeader: React.FC = ({ children }) => (
  <div className="cal-grid">
    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((item, key) => (
      <div className="cal-days-bold" key={key}>
        {item}
      </div>
    ))}
    {children}
  </div>
)

type CalendarDaysProps = {
  selectedDate: Date
  calendarMonth: CalendarStateType
  onClick: (event: React.MouseEvent, day: Date) => void
}
export const CalendarDays: React.FC<CalendarDaysProps> = ({
  selectedDate,
  calendarMonth,
  onClick,
}) => (
  <>
    {createMonthArray(calendarMonth).map((day: Date, key: number) => (
      <div
        key={key}
        // onClick={(event: React.MouseEvent) => setDate(day, event)}
        onClick={(event: React.MouseEvent) => {
          onClick(event, day)
        }}
        className={`
                cal-days
                ${day.getMonth() !== calendarMonth.month ? 'cal-days-grey' : ''}
                ${isSameDate(day, selectedDate) ? 'cal-day-selected' : ''}
              `}>
        {day.getDate()}
      </div>
    ))}
  </>
)
