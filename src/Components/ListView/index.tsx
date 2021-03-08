import React, { useEffect, useState } from "react"
import { Form, Table } from "semantic-ui-react"
import { ListViewProps } from "./types"

const ListView: React.FC<ListViewProps> = ({
  label,
  width,
  headers,
  value,
  ...props
}) => {
  const [selectedRow, setSelectedRow] = useState(0)
  const [tableData, setTableData] = useState<Array<any>>([])

  useEffect(() => {
    let data = []
    if (value !== "") {
      try {
        data = JSON.parse(value)
      } catch (err) {
        console.log(err)
      }
    }
    if (!Array.isArray(data)) data = []
    setTableData(data)
  }, [value])

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
        sortable
        headerRow={headers}
        renderBodyRow={renderBodyRow}
        tableData={tableData}
      />
    </Form.Field>
  )
}

export default ListView
