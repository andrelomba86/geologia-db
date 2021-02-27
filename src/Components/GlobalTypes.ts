import { ReactElement } from 'react'
import { FormFieldProps } from 'semantic-ui-react'

export interface FormState {
  [index: string]: any
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
