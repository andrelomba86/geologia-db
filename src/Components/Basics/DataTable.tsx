import { Column } from "primereact/column"
import { DataTable as DataTablePR, DataTableProps } from "primereact/datatable"
import React from "react"
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
  console.log("datatable")

  //TODO: checargem runtime do parâmetro header

  return (
    <div className={`p-field p-col-12 p-md-${colSize}`}>
      {label && <label>{label}</label>}
      <DataTablePR {..._props}>
        {headers.map((header) => (
          <Column field={header.field} header={header.header} />
        ))}
      </DataTablePR>
    </div>
  )
}
