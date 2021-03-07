// export function createNewFieldUpdater(
//   fieldName: string,

// //   state: any,
// //   stateSetter: React.Dispatch<React.SetStateAction<any>>
// // ): Function {
// //   return (value: any) => {
// //     // const newFieldState = { ...state[fieldName], value }
// //     stateSetter({ ...state, [fieldName]: value })
// //   }
// // }

// export const maskDate = (value: string): string => {
//   /** NUMBER ONLY */
//   /* VER PROBLEMA NO CLICK NO ICONE DE CALENDÁRIO */
//   let result
//   let reg: RegExp = /^(\d{2})([./-])?(\d{2})$/
//   result = reg.exec(value)
//   if (result) return `${result[1]}/${result[3]}`

//   reg = RegExp(/^(\d{2})([./-])?(\d{2})([./-])?(\d{1,4})$/)
//   result = reg.exec(value)
//   if (result) return `${result[1]}/${result[3]}/${result[5]}`

//   return value
// }

export const nothing = () => {}
