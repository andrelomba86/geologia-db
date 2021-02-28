import { CalendarMonth, DateInputValue } from "./types"

/**
  * Return a Date from a DD/MM/YYYY date string format
  * @param {string} str A string in DD/MM/YYYY date format

*/
export const strToDate = (str: string): DateInputValue => {
  const [day, month, year]: number[] = str.split(/\//).map((i) => +i)
  const date = new Date(year, month - 1, day)
  const isValidDate =
    Boolean(+date) && date.getDate() === day && month - 1 === date.getMonth()

  return isValidDate ? date : undefined
}

/**
 * Return a converted Date to string format (pt-BR)
 * @param {DateInputValue} date Date value to be converted
 */

export const dateToLocale = (date: DateInputValue): string => {
  if (!date) return ""
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}
/**
 * Return masked date in DD/MM/YYYY format
 * @param value String to be converted
 */
export const maskDate = (value: string): string => {
  let result, reg

  reg = RegExp(/[\d./-]+/)
  value = reg.exec(value)?.join("") || ""

  reg = RegExp(/^(\d{2})([./-])?(\d{2})([./-])?(\d{1,4})?$/)
  result = reg.exec(value)

  if (result)
    return `${result[1]}/${result[3]}${result[5] ? "/" + result[5] : ""}`

  return value
}
/**
 * Checks equality for two DateInputValues value. Returns true or false.
 * @param a DateInputValue value to be compared
 * @param b DateInputValue value to be compared
 */
export function isSameDate(a: DateInputValue, b: DateInputValue) {
  if (a === undefined || b === undefined) return false
  return (
    Math.abs(a.getTime() - b.getTime()) < 1000 * 3600 * 24 &&
    a.getDay() === b.getDay()
  )
}

/**
 * Calls a callback function for each day in a month of calendar and returns an array that contains the results
 * @param param0 CalendarMonth ({month, year}) object
 * @param callback Callback function that returns JSX Element
 */
export const calendarMapToJSX = (
  { month, year }: CalendarMonth,
  callback: (day: Date, key: number) => JSX.Element
): JSX.Element[] => {
  // let monthArr: Date[] = []
  let returnArray: JSX.Element[] = []
  let day = -6

  // Loop to set the initial day in the array
  for (; day <= 0; day++) if (new Date(year, month, day).getDay() === 0) break

  let key = 0
  for (; returnArray.length < 42; day++) {
    let date = new Date(year, month, day)
    returnArray.push(callback(date, key++))
  }
  return returnArray
}
