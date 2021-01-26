export const convertDate = (str: string): Date | undefined => {
  /* locale pt-br Date string */
  const [day, month, year]: number[] = str.split(/\//).map(i => +i)
  const date = new Date(year, month - 1, day)
  const isValidDate =
    Boolean(+date) && date.getDate() === day && month - 1 === date.getMonth()

  return isValidDate ? date : undefined
}
export const toLocale = (date: Date | undefined) => {
  if (!date) return ''
  return date.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
export const dateMask = (value: string): string => {
  /** NUMBER ONLY */
  /* VER PROBLEMA NO CLICK NO ICONE DE CALENDÁRIO */
  let result
  let reg: RegExp = /^(\d{2})([./-])?(\d{2})$/
  result = reg.exec(value)
  if (result) return `${result[1]}/${result[3]}`

  reg = RegExp(/^(\d{2})([./-])?(\d{2})([./-])?(\d{1,4})$/)
  result = reg.exec(value)
  if (result) return `${result[1]}/${result[3]}/${result[5]}`

  return value
}
