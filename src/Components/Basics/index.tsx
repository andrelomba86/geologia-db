import React from "react"
import { CommonProps } from "../GlobalTypes"
export { CollapsableDataTable, DataTable } from "./DataTable"
export { DatePicker } from "./DatePicker"
export { Dropdown } from "./Dropdown"
export { InputText } from "./InputText"
export { SubmitButtons } from "./SubmitButtons"

export const Container: React.FC = ({ children }) => {
  return <div className="p-d-flex p-jc-center ">{children}</div>
}

export const Form: React.FC = ({ children }) => {
  return <div className="p-fluid p-formgrid p-grid">{children}</div>
}

//TODO: mover inerface e mudar nome do componente
interface ToggleProps {
  show: Boolean
  // children: JSX.Element | JSX.Element[] | string | string[]
  children: React.ReactNode
}
export const Toggle: React.FC<ToggleProps> = ({ show, children }) => {
  if (show) return <>{children}</>
  return <></>
}

interface FieldProps {
  size: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
  children: React.ReactNode
}
export const Field: React.FC<FieldProps> = ({ children, size }) => {
  return <div className={`p-field p-col-12 p-md-${size}`}>{children}</div>
}
