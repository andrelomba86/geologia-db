import React from "react"
import { Dropdown as DropdownPR, DropdownProps } from "primereact/dropdown"
import { CommonProps } from "../GlobalTypes"

export const Dropdown: React.FC<DropdownProps & CommonProps> = ({
  label,
  colSize = "12",
  ...props
}) => {
  const _props: DropdownProps = Object.assign(props)
  // _props.optionDisabled = true
  return (
    <div className={`p-field p-col-12 p-md-${colSize}`}>
      {label && <label>{label}</label>}
      <DropdownPR {..._props} />
    </div>
  )
}
