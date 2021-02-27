import { InputProps, SemanticICONS } from 'semantic-ui-react'

export interface CalendarMonth {
  month: number
  year: number
}

export interface CalendarStateType {
  //currentDate: monthYear
  month: number
  year: number
}

export interface CalendarProps {
  setDate: Function
  date?: Date
  id: string
}

export type DateInputValue = Date | undefined

export interface DateInputProps extends Omit<InputProps, 'onChange' | 'value'> {
  onChange?: (
    // event: React.ChangeEvent | React.FocusEvent,
    event: React.SyntheticEvent,
    data: { value: DateInputValue }
  ) => void
  value?: DateInputValue
}

export enum CalendarShift {
  previousYear = -12,
  nextYear = 12,
  previousMonth = -1,
  nextMonth = 1,
}
export type CalendarContainerProps = { id: string }
export type CalendarButtonProps = {
  iconName: SemanticICONS
  onClick: (event: React.MouseEvent) => void
}
