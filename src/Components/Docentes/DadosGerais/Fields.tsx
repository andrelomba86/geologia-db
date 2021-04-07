import React from "react"
import { DataTable, DatePicker, Dropdown, InputText } from "../../Basics"
import { DropdownItems, FieldsComponents, FieldsType } from "../../GlobalTypes"

export const fieldsProperties: FieldsComponents<FieldsType>[] = [
  {
    fieldName: "Docente",
    component: Dropdown,
    props: {
      label: "Nome",
      placeholder: "Nome do docente",
      colSize: "12",
      options: [],
      optionLabel: "item",
    },
  },
  {
    fieldName: "Cargo",
    component: Dropdown,
    props: {
      label: "Cargo",
      options: [],
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
      // placeholder: "DD/MM/AAAA",
      colSize: "3",
    },
  },
  {
    fieldName: "RegimeJurídico",
    component: Dropdown,
    props: {
      label: "Regime jurídico",
      options: [],
      filter: true,
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
      options: [],
      filter: true,
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
    component: DataTable,
    props: {
      headers: [
        { field: "Referencia", header: "Referência" },
        { field: "Data", header: "Data" },
      ],
      label: "Carreira docente",
      colSize: "4",
    },
  },

  //     {
  //       component: ListView,
  //       fieldName: "Carreira",
  //       props: {
  //         label: "Carreira",
  //         width: 4,
  //         headers: ["Referência", "Data"],
  //       },
  //     },
  //   ],
]

const getInitialDropdownItems = () => {
  const loadIcon = <i className="pi pi-spin pi-spinner"></i>

  let dropdownItems: DropdownItems = {}
  fieldsProperties.forEach((field, fieldNum) => {
    if (field.component === Dropdown)
      dropdownItems = {
        ...dropdownItems,
        [field.fieldName]: [{ item: loadIcon }],
      }
  })
  return dropdownItems
}
export const initialDropdownItems = getInitialDropdownItems()
