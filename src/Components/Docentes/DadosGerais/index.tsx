import React, { useEffect, useState } from "react"
import { Form, SubmitButtons } from "../../Basics"
import { DropdownItems, FieldsType } from "../../GlobalTypes"
import { initialState } from "./consts"
import DB from "./DBEmulator"
import {
  dropdownFieldsToFetch,
  fieldsMap /*, initialDropdownItems */,
  fieldsProperties as fieldsPropertiesFN,
} from "./Fields"
//TODO: alterar nomem de fieldsProperties no arquivo Fields.tsx

export default function DadosGerais() {
  const [fieldsValues, setFieldsValues] = useState(initialState)
  const [fieldsChanged, setFieldsChanged] = useState(false)

  const [dropdownLists, setDropdownLists] = useState<DropdownItems>({
    Docente: [],
    Cargo: [],
    RegimeJurídico: [],
    RegimeDeTrabalho: [],
  })

  useEffect(() => {
    //TODO: LOADING ICON
    const updateDropdownLists = async () => {
      console.log("update")
      let lists = {}
      console.log()
      for (let key of dropdownFieldsToFetch) {
        let fetchedList = await DB.fetch(key)
        lists = { ...lists, [key]: fetchedList }
      }
      setDropdownLists(lists)
    }
    updateDropdownLists()

    setFieldsValues(DB.getValues())
  }, [])

  const fieldsProperties = fieldsPropertiesFN(dropdownLists)

  console.log(dropdownLists, fieldsProperties)
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

  // const fieldsProperties = fieldsProperties(dropdownLists)

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
