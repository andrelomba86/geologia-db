export interface FieldsComponents<T> {
  // component: React.FunctionComponent
  component: React.FC<any>
  fieldName: keyof T
  props: FieldsProps
}

export interface FieldsProps extends CommonProps {
  [key: string]: any
  label?: string
  value?: any
}

export interface CommonProps {
  colSize?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
  label?: string
}

// export interface
export interface DropdownItems {
  [index: string]: any
}

export interface FieldsType {
  [index: string]: any
}

export interface FieldMap {
  handleFieldChange: (fieldName: keyof FieldsType) => void
  fieldsProperties: Array<FieldsComponents<FieldsType>>
  fieldsValues: FieldsType
}
// {
//   [index: number]: {
//     [name: string]: JSX.Element | string
//   }
// }
