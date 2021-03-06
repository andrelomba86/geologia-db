// import React from 'react'
import { Form } from "semantic-ui-react"
import { FieldsComponents } from "../../GlobalTypes"
import { FieldsTypes } from "./types"
import DateInput from "../../DateInput"
import ListView from "../../ListView"

const docentes_list = [
  { text: "Cesar Augusto Moreira", value: "Cesar Augusto Moreira" },
  { text: "Chang Hung Kiang", value: "Chang Hung Kiang" },
  { text: "Daniel Marcos Bonotto", value: "Daniel Marcos Bonotto" },
]

const fields: FieldsComponents<FieldsTypes>[][] = [
  [
    {
      fieldName: "Docente",
      component: Form.Dropdown,
      props: {
        label: "Nome",
        placeholder: "Nome do docente",
        search: true,
        selection: true,
        allowAdditions: true,
        options: docentes_list,
        width: 9,
      },
    },
  ],
  [
    {
      fieldName: "DataAdmissão",
      component: DateInput,
      props: {
        label: "Data de admissão",
        placeholder: "DD/MM/AAAA",
        width: 3,
      },
    },
    {
      fieldName: "Matricula",
      component: Form.Input,
      props: {
        label: "Matrícula",
        width: 3,
      },
    },
    {
      fieldName: "Referencia",
      component: Form.Input,
      props: {
        label: "Referência",
        width: 3,
      },
    },
  ],
  [
    {
      fieldName: "Cargo",
      component: Form.Dropdown,
      props: {
        label: "Cargo",
        search: true,
        selection: true,
        allowAdditions: true,
        options: [],
        width: 5,
      },
    },
    // {
    //   fieldName: 'DataCargo',
    //   component: DateInput,
    //   props: {
    //     label: 'Início no cargo',
    //     // allowOnlyNumbers: 'true',
    //     // format: 'DD/MM/YYYY',
    //     // locale: 'pt-BR',
    //   },
    // },
    {
      component: ListView,
      fieldName: "Carreira",
      props: {
        label: "Carreira",
        width: 4,
      },
    },
  ],
]
export default fields
