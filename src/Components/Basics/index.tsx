import React from "react"
export { DataTable } from "./DataTable"
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
