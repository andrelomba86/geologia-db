import React from "react"
import { InputText as InputTextPR, InputTextProps } from "primereact/inputtext"
import { CommonProps } from "../GlobalTypes"

export const InputText: React.FC<InputTextProps & CommonProps> = ({
  label,
  colSize = "12",
  ...props
}) => {
  // const _props: InputTextProps = Object.assign(props)
  const _props: any = Object.assign(props)
  _props.type = "text"
  // _props.props
  return (
    <div className={`p-field p-col-12 p-md-${colSize}`}>
      {label && <label>{label}</label>}
      <InputTextPR {..._props} />
    </div>
  )
}
