import React, { useEffect, useState } from "react"
import { Form, SubmitButtons } from "../../Basics"
import { fieldsMap } from "../../GlobalFunctions"
import { DropdownItems, FieldsType } from "../../GlobalTypes"
import { initialState } from "./consts"
import DB from "./DBEmulator"
import { fieldsBuilder } from "./Fields"
//TODO: alterar nomem de fieldsProperties no arquivo Fields.tsx

export default function DadosGerais() {
  const [fieldsValues, setFieldsValues] = useState(initialState)
  const [fieldsChanged, setFieldsChanged] = useState(false)

  const [dropdownLists, setDropdownLists] = useState<DropdownItems>({})

  fieldsBuilder.setFieldsOptions(dropdownLists)
  let fieldsProperties = fieldsBuilder.fieldsProperties

  useEffect(() => {
    //TODO: LOADING ICON
    const fieldsToFetch = fieldsBuilder.fieldsToFetch
    const updateDropdownLists = async () => {
      let lists = {}
      for (let key of fieldsToFetch) {
        let fetchedList = await DB.fetch(key)
        lists = { ...lists, [key]: fetchedList }
      }
      setDropdownLists(lists)
    }
    updateDropdownLists()

    setFieldsValues(DB.getValues())
  }, [])

  const handleFieldChange = (fieldName: keyof FieldsType) => {
    return (event: React.ChangeEvent) => {
      setFieldsValues({
        ...fieldsValues,
        [fieldName]: (event.target as HTMLElement & { value: any }).value,
      })
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
      {fieldsMap({
        handleFieldChange,
        fieldsProperties,
        fieldsValues,
      })}
      <SubmitButtons
        onCLickSave={handleSaveButton}
        onClickCancel={handleCancelButton}
        disabled={!fieldsChanged}
      />
    </Form>
  )
}
