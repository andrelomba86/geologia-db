import { ReactElement } from "react"
import { FormFieldProps } from "semantic-ui-react"

export interface MenuItem {
  title: string
  name: string
  component: ReactElement
  icon?: string
  route: string
}
export interface MenuItems extends Array<MenuItem> {}

export interface FieldsComponents<T> {
  // component: React.FunctionComponent
  component: React.FC<any>
  fieldName: keyof T
  options?: {}
  props: FormFieldProps
}
