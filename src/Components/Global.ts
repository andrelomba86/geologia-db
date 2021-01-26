import { ReactElement } from 'react'
import { FormFieldProps } from 'semantic-ui-react'
/* 

Types 


*/

export interface FormState {
  [index: string]: {
    value: any
  }
}
export interface MenuItem {
  title: string
  name: string
  component: ReactElement
  icon?: string
  route: string
}
export interface MenuItems extends Array<MenuItem> {}

interface FieldState {
  component: React.FunctionComponent
  fieldName: string
  options?: object
  props: FormFieldProps
}
export interface FieldStateArray extends Array<Array<FieldState>> {}

/*

Functions 

*/

export function createNewFieldUpdater(
  fieldName: string,
  state: FormState,
  stateSetter: React.Dispatch<React.SetStateAction<FormState>>
): Function {
  return (value: any) => {
    const newFieldState = { ...state[fieldName], value: value }
    stateSetter({ ...state, [fieldName]: { ...newFieldState } })
  }
}
