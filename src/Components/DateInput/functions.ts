import { CalendarMonth, DateInputValue } from './types'

export const strToDate = (str: string): DateInputValue => {
  /* locale pt-br Date string */
  const [day, month, year]: number[] = str.split(/\//).map(i => +i)
  const date = new Date(year, month - 1, day)
  const isValidDate =
    Boolean(+date) && date.getDate() === day && month - 1 === date.getMonth()

  return isValidDate ? date : undefined
}

export const dateToLocale = (date: DateInputValue): string => {
  if (!date) return ''
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export const maskDate = (value: string): string => {
  let result, reg

  reg = RegExp(/[\d./-]+/)
  value = reg.exec(value)?.join('') || ''

  reg = RegExp(/^(\d{2})([./-])?(\d{2})([./-])?(\d{1,4})?$/)
  result = reg.exec(value)

  if (result)
    return `${result[1]}/${result[3]}${result[5] ? '/' + result[5] : ''}`

  return value
}

export function isSameDate(a: DateInputValue, b: DateInputValue) {
  if (a === undefined || b === undefined) return false
  return (
    Math.abs(a.getTime() - b.getTime()) < 1000 * 3600 * 24 &&
    a.getDay() === b.getDay()
  )
}

export const createMonthArray = ({ month, year }: CalendarMonth): Date[] => {
  let monthArr: Date[] = []
  let day = -6

  // Loop to set the initial day in the array
  for (; day <= 0; day++) if (new Date(year, month, day).getDay() === 0) break

  for (; monthArr.length < 42; day++) {
    let date = new Date(year, month, day)
    monthArr.push(date)
  }
  return monthArr
}
