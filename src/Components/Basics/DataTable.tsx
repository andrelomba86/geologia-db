import { Column } from "primereact/column"
import { DataTable as DataTablePR, DataTableProps } from "primereact/datatable"
import { ToggleButton } from "primereact/togglebutton"
import React, { useState } from "react"
import { Field, Toggle } from "."
import { CommonProps } from "../GlobalTypes"

//TODO: Change interface name and move to types file
interface Props extends CommonProps {
  headers: Array<{
    header: any
    field: string
  }>
  // Array<ColumnProps>
}

export const DataTable: React.FC<DataTableProps & Props> = ({
  label,
  colSize = "12",
  value,
  headers,
  ...props
}) => {
  const _props: DataTableProps = Object.assign(props)

  //TODO: checargem runtime do parâmetro header

  return (
    <div className={`p-field p-col-12 p-md-${colSize}`}>
      {label ?? <label>{label}</label>}
      <DataTablePR {..._props}>
        {headers.map((header, index) => (
          <Column key={index} field={header.field} header={header.header} />
        ))}
      </DataTablePR>
    </div>
  )
}

//TODO: refatorar
export const CollapsableDataTable: React.FC<DataTableProps & Props> = ({
  label,
  ...props
}) => {
  const [active, setActive] = useState(false)
  const colSize = props.colSize ?? "12"
  props.colSize = "12"

  return (
    //<div className={`p-field p-col-12 p-md-${colSize}`}>
    <Field {...{ size: colSize }}>
      {label ?? <label>{label}</label>}
      <ToggleButton
        className="p-p-0 p-ml-2"
        checked={active}
        onChange={() => setActive(!active)}
        onIcon="pi pi-chevron-up"
        offIcon="pi pi-chevron-down"
        onLabel=""
        offLabel=""
      />

      <Toggle show={active}>
        <DataTable {...props} />
      </Toggle>
    </Field>
  )
}
