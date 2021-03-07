import React, { useEffect, useState } from "react"
import { Form, Tab } from "semantic-ui-react"
import { FieldsTypes } from "./types"
import { FieldsComponents } from "../../GlobalTypes"
import { initialState } from "./consts"
import { DropdownItemProps } from "semantic-ui-react"
import fieldsComponents from "./FieldsComponents"

import DB from "./DBEmulator"

export default function DadosGerais() {
  const [fieldsValues, setFieldsValues] = useState(initialState)
  const [fieldsChanged, setFieldsChanged] = useState(false)

  useEffect(() => {
    const data = DB.getValues()
    setFieldsValues(data)
  }, [])

  const handleFieldChange = (fieldName: keyof FieldsTypes) => {
    return (_e: React.SyntheticEvent, { value }: any) => {
      setFieldsValues({ ...fieldsValues, [fieldName]: value })
      setFieldsChanged(true)
    }
  }

  /**** Adicionar interface ComboArray ou outra coisa no lugar de Array */

  const handleAddItem = (options: DropdownItemProps[]) => {
    return (_e: React.SyntheticEvent, { value }: DropdownItemProps) => {
      options.push({ text: value, value: value })
    }
  }
  const handleSaveButton = () => {
    console.log(fieldsValues)
  }
  const handleCancelButton = () => {
    // dispatchFieldsValues({ type: "Update", payload: cachedValues })
    setFieldsValues(DB.getValues())
    setFieldsChanged(false)
  }

  return (
    <Tab.Pane>
      <Form>
        {fieldsComponents.map((group: any, groupKey: number) => {
          return (
            <Form.Group key={groupKey}>
              {group.map(
                (field: FieldsComponents<FieldsTypes>, fieldNum: number) => (
                  <field.component
                    tabIndex={groupKey * 100 + fieldNum}
                    key={field.fieldName}
                    fieldname={field.fieldName}
                    onChange={handleFieldChange(field.fieldName)}
                    value={fieldsValues[field.fieldName]}
                    {...(field.props.options !== undefined && {
                      onAddItem: handleAddItem(field.props.options),
                    })}
                    {...field.props}
                  />
                )
              )}
            </Form.Group>
          )
        })}

        <Form.Group>
          <Form.Button
            content="Salvar"
            primary
            onClick={handleSaveButton}
            disabled={!fieldsChanged}
          />
          <Form.Button
            content="Cancelar"
            secondary
            onClick={handleCancelButton}
            disabled={!fieldsChanged}
          />
        </Form.Group>
      </Form>
    </Tab.Pane>
  )
}
