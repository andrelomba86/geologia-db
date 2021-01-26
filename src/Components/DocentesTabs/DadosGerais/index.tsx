import React, { useState } from 'react'
import { Form, Tab } from 'semantic-ui-react'
import { createNewFieldUpdater } from '../../Global'
import fieldsComponents from './FieldsComponents'
import fieldsState from './State'

export const tabName = 'Dados Gerais'

export default function DadosGerais() {
  // ATUALIZAR TYPESCRIPT FIELDS, SETFIELDS
  const [fields, setFields]: [typeof fieldsState, any] = useState(fieldsState)

  // let fieldsRef = useRef(fieldsState)
  // let fields = fieldsRef.current
  // const setFields = (obj: any) => {
  //   fields = obj
  // }

  const [fieldsChanged, setFieldsChanged] = useState(false)

  function handleFieldChange(fieldName: string) {
    return function (
      _e: React.EventHandler<React.SyntheticEvent>,
      { value }: any
    ) {
      const fieldUpdate = createNewFieldUpdater(fieldName, fields, setFields)

      fieldUpdate(value)
      //console.log('update')

      setFieldsChanged(true)
    }
  }

  /**** Adicionar interface ComboArray ou outra coisa no lugar de Array */

  const handleAddItem = (
    options: Array<any>
    // fieldType: string = 'default'
  ) => {
    return function (
      _e: React.EventHandler<React.SyntheticEvent>,
      { value }: any
    ) {
      // if ((fieldType = 'default')) {
      options.push({ text: value, value: value })
      // }
    }
  }
  const getFieldValue = (fieldName: string) => {
    const field = fields[fieldName]
    return field.value
    // return 0
  }
  const handleSaveButton = () => {
    console.log(fields)
  }
  const handleCancelButton = () => {
    console.log('setFields')
    setFields(fieldsState)
    console.log('setFieldsChanged FALSE')
    setFieldsChanged(false)
    //// MUDAR - PROBLEMA NOS CAMPOS DE DATA (NÃO LIMPA)

    // console.log('cancel')
  }
  // console.log('render, fieldsChanged =', fieldsChanged)

  const tabNum = (groupKey: number, fieldNum: number) => {
    let num = groupKey * 10 + fieldNum
    console.log(fieldNum, groupKey)
    return num
  }

  return (
    <Tab.Pane>
      <Form centered>
        {fieldsComponents.map((group: any, groupKey: number) => {
          return (
            <Form.Group key={groupKey}>
              {group.map((field: any, fieldNum: number) => (
                <field.component
                  {...field.props}
                  {...(field.props.options && {
                    onAddItem: handleAddItem(field.props.options),
                  })}
                  tabIndex={tabNum(groupKey, fieldNum)}
                  onChange={handleFieldChange(field.fieldName)}
                  // onChange={() => setFieldsChanged(true)}
                  // defaultValue={getFieldValue(field.fieldName)}
                  value={getFieldValue(field.fieldName)}
                  key={field.fieldName}
                  fieldname={field.fieldName}
                />

                /*CRIAR REFERENCIAS PARA OS OBJETOS

                  refs_object = {
                    [Field.fieldName]: useRef<[Field.component]>(fields[field.fieldName])

                }*/
              ))}
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
