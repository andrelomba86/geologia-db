import React, { useState } from "react"
import { Form, Table } from "semantic-ui-react"
import { ListViewProps } from "./types"

const ListView: React.FC<ListViewProps> = ({ label, width, ...props }) => {
  const [selectedRow, setSelectedRow] = useState(0)

  const tableData = [
    { reference: "MS5.1", date: "25/01/2020" },
    { reference: "MS3.2", date: "05/01/2005" },
    { reference: "MS3.1", date: "02/10/2000" },
  ]

  const headers = ["Referência", "Data"]

  const renderBodyRow = (rowData: [], index: number) => ({
    key: index,
    active: !!(selectedRow === index),
    cells: rowData,
    onClick: () => setSelectedRow(index),
  })

  return (
    <Form.Field width={width}>
      <label>{label}</label>

      <Table
        {...props}
        celled
        compact="very"
        size="small"
        selectable
        headerRow={headers}
        renderBodyRow={renderBodyRow}
        tableData={tableData}
        style={{
          "-webkit-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        }}
      />
    </Form.Field>
  )
}

export default ListView
