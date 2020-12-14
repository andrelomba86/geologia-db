import React, { useState } from 'react'
import { Form, Tab } from 'semantic-ui-react'

// import SemanticDatepicker from 'react-semantic-ui-datepickers'

import fieldsComponents from './FieldsComponents'
import fieldsState, { FormState } from './State'
export const tabName = 'Dados Gerais'

export default function DadosGerais() {
  const [fields, setFields] = useState(fieldsState)

  const handleFieldChange = (fieldName: string) => {
    return function (
      _e: React.EventHandler<React.SyntheticEvent<any>>,
      { value }: any
    ) {
      const fieldUpdate = createNewFieldUpdater(fieldName, fields, setFields)
      fieldUpdate(value)
      //console.log(_e)
    }
  }
  const getFieldValue = (fields: FormState, fieldName: string) => {
    const field = fields[fieldName]
    return field.value
  }
  console.log('renderi')
  return (
    <Tab.Pane>
      <Form>
        {fieldsComponents.map((group: any) => {
          return (
            <Form.Group>
              {group.map((field: any, fieldKey: number) => (
                <field.component
                  {...field.props}
                  onChange={handleFieldChange(field.fieldName)}
                  value={getFieldValue(fields, field.fieldName)}
                  key={fieldKey}
                />
              ))}
            </Form.Group>
          )
        })}
      </Form>
    </Tab.Pane>
  )
}

function createNewFieldUpdater(
  fieldName: string,
  state: FormState,
  stateSetter: React.Dispatch<React.SetStateAction<FormState>>
): Function {
  return (value: any) => {
    const newFieldState = { ...state[fieldName], value: value }
    console.log(state, 'newfield', newFieldState)
    stateSetter({ ...state, [fieldName]: { ...newFieldState } })
  }
}
