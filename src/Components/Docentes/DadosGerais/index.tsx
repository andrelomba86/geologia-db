import React, { useEffect, useState } from "react"
import { Form, SubmitButtons } from "../../Basics"
import { DropdownItems, FieldsComponents, FieldsType } from "../../GlobalTypes"
import { initialState } from "./consts"

import DB from "./DBEmulator"
import { fieldsProperties, initialDropdownItems } from "./Fields"

export default function DadosGerais() {
  const [fieldsValues, setFieldsValues] = useState(initialState)
  const [fieldsChanged, setFieldsChanged] = useState(false)
  const [dropdownLists, setDropdownLists] = useState<DropdownItems>(
    initialDropdownItems
  )

  useEffect(() => {
    let lists = {}
    const updateDropdownLists = async () => {
      for (let key in initialDropdownItems) {
        let fetchedList = await DB.fetch(key)
        lists = { ...lists, [key]: fetchedList }
      }
      setDropdownLists(lists)
    }
    updateDropdownLists()

    const data = DB.getValues()
    setFieldsValues(data)
  }, [])

  const handleFieldChange = (fieldName: keyof FieldsType) => {
    return (_e: any) => {
      // document.aaaa = _e
      setFieldsValues({ ...fieldsValues, [fieldName]: _e.target.value })
      setFieldsChanged(true)
    }
  }
  const handleSaveButton = () => {
    console.log(fieldsValues)
  }
  const handleCancelButton = () => {
    setFieldsValues(DB.getValues())
    setFieldsChanged(false)
  }
  // debugger
  return (
    <Form>
      {fieldsProperties.map(
        (field: FieldsComponents<FieldsType>, fieldNum: number) => {
          if (field.props.options) {
            field.props.options = dropdownLists[field.fieldName]
          }
          return (
            <field.component
              tabIndex={fieldNum}
              key={field.fieldName}
              fieldname={field.fieldName}
              onChange={handleFieldChange(field.fieldName)}
              value={fieldsValues[field.fieldName]}
              {...field.props}
            />
          )
        }
      )}
      <SubmitButtons
        onCLickSave={handleSaveButton}
        onClickCancel={handleCancelButton}
        disabled={!fieldsChanged}
      />
    </Form>
  )
}
