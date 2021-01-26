export interface monthArrayType extends Array<Date> {}
export interface monthYear {
  month: number
  year: number
}

export interface calendarStateType {
  currentDate: monthYear
  selectedDate: Date | undefined
}
export interface calendarStyle {
  [key: string]: any
  //    React.CSSProperties
}

export interface CalendarProps {
  setDate: Function
  setShow: Function
  date?: Date
  id: string
}

export type DateInputType = Date | undefined
