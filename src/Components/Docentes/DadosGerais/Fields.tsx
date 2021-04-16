import React from "react"
import {
  CollapsableDataTable,
  DatePicker,
  Dropdown,
  InputText,
} from "../../Basics"
import {
  DropdownItems,
  FieldMap,
  FieldsComponents,
  FieldsType,
} from "../../GlobalTypes"
/* TODO 

--

*/
const loadIcon = <i className="pi pi-spin pi-spinner"></i>

/*  (
  
) */

export const fieldsProperties = (
  dropdownLists: DropdownItems = {
    Docente: [],
    Cargo: [],
    RegimeJurídico: [],
    RegimeDeTrabalho: [],
  }
): Array<FieldsComponents<FieldsType>> => [
  {
    fieldName: "Docente",
    component: Dropdown,
    props: {
      label: "Nome",
      placeholder: "Nome do docente",
      colSize: "12",
      options: dropdownLists.Docente,
      optionLabel: "item",
    },
  },
  {
    fieldName: "Cargo",
    component: Dropdown,
    props: {
      label: "Cargo",
      options: dropdownLists.Cargo,
      filter: true,
      editable: true,
      optionLabel: "item",
      colSize: "4",
    },
  },
  {
    fieldName: "Matricula",
    component: InputText,
    props: {
      label: "Matrícula",
      colSize: "2",
    },
  },
  {
    fieldName: "DataAdmissão",
    component: DatePicker,
    props: {
      label: "Data de admissão",
      colSize: "3",
    },
  },
  {
    fieldName: "RegimeJurídico",
    component: Dropdown,
    props: {
      label: "Regime jurídico",
      options: dropdownLists.RegimeJurídico,
      editable: true,
      optionLabel: "item",
      colSize: "3",
    },
  },
  {
    fieldName: "DataCargo",
    component: DatePicker,
    props: {
      label: "Data de início no cargo",
      colSize: "3",
    },
  },
  {
    fieldName: "RegimeDeTrabalho",
    component: Dropdown,
    props: {
      label: "Regime de trabalho",
      options: dropdownLists.RegimeJurídico,
      // filter: true,
      editable: true,
      optionLabel: "item",
      colSize: "3",
    },
  },
  {
    fieldName: "RegimeAplicacao",
    component: DatePicker,
    props: {
      label: "Aplicação do regime",
      colSize: "3",
    },
  },
  {
    fieldName: "RegimeConfirmação",
    component: DatePicker,
    props: {
      label: "Confirmação do regime",
      colSize: "3",
    },
  },
  {
    fieldName: "Carreira",
    component: CollapsableDataTable,
    props: {
      headers: [
        { field: "Referencia", header: "Referência" },
        { field: "Data", header: "Data" },
      ],
      label: "Carreira docente",
      colSize: "4",
    },
  },
]
//TODO
/**
 * @param {Object} arg
 *
 * handleFieldChange - Function to handle changes in the field
 *
 * dynamicFieldsProps.drodownLists - Variable that contains Object with each dropdown list (use fields names as the keys)
 *
 * fieldsValues - Object containing fields values
 *
 * @returns Array containing all the fields with dynamic properties defined
 */

export const fieldsMap = ({
  handleFieldChange,
  fieldsProperties,
  fieldsValues,
}: FieldMap) =>
  fieldsProperties.map(
    (field: FieldsComponents<FieldsType>, fieldNum: number) => {
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
  )

export const dropdownFieldsToFetch = [
  "Docente",
  "Cargo",
  "RegimeJurídico",
  "RegimeDeTrabalho",
]
