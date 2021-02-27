import React, { useState } from 'react'
import { Form, Tab } from 'semantic-ui-react'
import { createNewFieldUpdater, tabIndexGenerate } from '../../GlobalFunctions'
import fieldsComponents from './FieldsComponents'
import fieldsValues from './State'

// import DateInput from '../../DateInput'

export default function DadosGerais() {
  // ATUALIZAR TYPESCRIPT FIELDS, SETFIELDS
  const [fields, setFields] = useState<typeof fieldsValues>(fieldsValues)
  const [fieldsChanged, setFieldsChanged] = useState(false)

  function handleFieldChange(fieldName: string) {
    return function (
      _e: React.EventHandler<React.SyntheticEvent>,
      { value }: any
    ) {
      const fieldUpdate = createNewFieldUpdater(fieldName, fields, setFields)
      console.log('update', value)
      fieldUpdate(value)
      setFieldsChanged(true)
    }
  }

  /**** Adicionar interface ComboArray ou outra coisa no lugar de Array */

  const handleAddItem = (options: Array<any>) => {
    return function (_e: React.SyntheticEvent, { value }: any) {
      options.push({ text: value, value: value })
    }
  }
  const handleSaveButton = () => {
    console.log(fields)
  }
  const handleCancelButton = () => {
    setFields(fieldsValues)
    setFieldsChanged(false)
  }

  return (
    <Tab.Pane>
      <Form>
        {fieldsComponents.map((group: any, groupKey: number) => {
          return (
            <Form.Group key={groupKey}>
              {group.map((field: any, fieldNum: number) => (
                <field.component
                  {...field.props}
                  {...(field.props.options && {
                    onAddItem: handleAddItem(field.props.options),
                  })}
                  tabIndex={tabIndexGenerate(groupKey, fieldNum)}
                  onChange={handleFieldChange(field.fieldName)}
                  value={fields[field.fieldName]}
                  key={field.fieldName}
                  fieldname={field.fieldName}
                />
              ))}
            </Form.Group>
          )
        })}

        <Form.Group>
          {/* <DateInput value="" /> */}
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
