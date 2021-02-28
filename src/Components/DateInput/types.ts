import { InputProps, SemanticICONS } from "semantic-ui-react"

export interface DateInputProps extends Omit<InputProps, "onChange" | "value"> {
  onChange?: (
    event: React.SyntheticEvent,
    data: { value: DateInputValue }
  ) => void
  value?: DateInputValue
}

export type DateInputValue = Date | undefined

/* Calendar Types */

export interface CalendarProps {
  setDate: (day: Date, event: React.SyntheticEvent) => void
  date?: Date
  id: string
}

export type CalendarContainerProps = { id: string }

export type CalendarButtonProps = {
  iconName: SemanticICONS
  onClick?: (event: React.MouseEvent) => void
}

export interface CalendarMonth {
  month: number
  year: number
}

export type CalendarDaysProps = {
  selectedDate: Date
  calendarMonth: CalendarMonth
  onClick: (event: React.MouseEvent, day: Date) => void
}
