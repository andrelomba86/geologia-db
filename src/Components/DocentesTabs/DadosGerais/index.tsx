import React, { useEffect, useState } from "react"
import { Form, Tab } from "semantic-ui-react"
import { tabIndexGenerate } from "../../GlobalFunctions"
import { FieldsTypes } from "./types"
import { emptyState } from "./consts"
import fieldsComponents from "./FieldsComponents"
import { FieldsComponents } from "../../GlobalTypes"
import { DropdownItemProps } from "semantic-ui-react"

import DB from "./DBEmulator"

export default function DadosGerais() {
  const [fieldsValues, setFieldsValues] = useState<FieldsTypes>(emptyState)
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
                    {...field.props}
                    {...(field.props.options && {
                      onAddItem: handleAddItem(field.props.options),
                    })}
                    tabIndex={tabIndexGenerate(groupKey, fieldNum)}
                    onChange={handleFieldChange(field.fieldName)}
                    value={fieldsValues[field.fieldName]}
                    key={field.fieldName}
                    fieldname={field.fieldName}
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
