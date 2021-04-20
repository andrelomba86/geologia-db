import React from "react"
import { DropdownItems, FieldMap, FieldsProperties } from "./GlobalTypes"

export const fieldsMap = ({
  fieldsProperties,
  fieldsValues,
  handleFieldChange,
}: FieldMap) => {
  let fields: JSX.Element[] = []
  let fieldNum = 0
  for (let fieldName in fieldsProperties) {
    fieldNum++
    const field = fieldsProperties[fieldName]

    fields.push(
      <field.component
        tabIndex={fieldNum}
        key={fieldName}
        fieldname={fieldName}
        onChange={handleFieldChange(fieldName)}
        value={fieldsValues[fieldName]}
        {...field.props}
      />
    )
  }
  return fields
}

export const fieldsFactory = (
  // dropdownFields: DropdownItems,
  fieldsProperties: FieldsProperties
) => {
  let fieldsToFetch: string[] = []
  for (let fieldName in fieldsProperties) {
    if (fieldsProperties[fieldName].fetchOptions) fieldsToFetch.push(fieldName)
  }

  const setFieldsOptions = (fieldsOptions: DropdownItems) => {
    for (let key in fieldsOptions) {
      if (key in fieldsProperties) {
        fieldsProperties[key].props.options = fieldsOptions[key] ?? []
      } else {
        throw new Error(`Field ${key} not found in fieldsProperties`)
      }
    }
  }
  return {
    fieldsProperties,
    fieldsToFetch,
    setFieldsOptions,
  }
}
