import React from "react"
import { Calendar, CalendarProps } from "primereact/calendar"
import { CommonProps } from "../GlobalTypes"

export const DatePicker: React.FC<CalendarProps & CommonProps> = ({
  label,
  colSize = "12",
  ...props
}) => {
  const _props: CalendarProps = Object.assign(props)
  // _props.dateFormat = "dd/mm/yy"
  _props.mask = "99/99/9999"
  _props.showIcon = true

  return (
    <div className={`p-field p-col-12 p-md-${colSize}`}>
      {label && <label>{label}</label>}

      <Calendar {..._props} />
    </div>
  )
}
