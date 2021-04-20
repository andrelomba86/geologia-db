import {
  CollapsableDataTable,
  DatePicker,
  Dropdown,
  InputText,
} from "../../Basics"
import { fieldsFactory } from "../../GlobalFunctions"
import { FieldsProperties } from "../../GlobalTypes"

const fields: FieldsProperties = {
  Docente: {
    component: Dropdown,
    fetchOptions: true,
    props: {
      label: "Nome",
      placeholder: "Nome do docente",
      colSize: "12",
      optionLabel: "item",
    },
  },
  Cargo: {
    component: Dropdown,
    fetchOptions: true,
    props: {
      label: "Cargo",
      filter: true,
      editable: true,
      optionLabel: "item",
      colSize: "4",
    },
  },
  Matricula: {
    component: InputText,
    props: {
      label: "Matrícula",
      colSize: "2",
    },
  },
  DataAdmissão: {
    component: DatePicker,
    props: {
      label: "Data de admissão",
      colSize: "3",
    },
  },
  RegimeJurídico: {
    component: Dropdown,
    fetchOptions: true,
    props: {
      label: "Regime jurídico",
      editable: true,
      optionLabel: "item",
      colSize: "3",
    },
  },
  DataCargo: {
    component: DatePicker,
    props: {
      label: "Data de início no cargo",
      colSize: "3",
    },
  },
  RegimeDeTrabalho: {
    component: Dropdown,
    fetchOptions: true,
    props: {
      label: "Regime de trabalho",
      // filter: true,
      editable: true,
      optionLabel: "item",
      colSize: "3",
    },
  },
  RegimeAplicacao: {
    component: DatePicker,
    props: {
      label: "Aplicação do regime",
      colSize: "3",
    },
  },
  RegimeConfirmação: {
    component: DatePicker,
    props: {
      label: "Confirmação do regime",
      colSize: "3",
    },
  },
  Carreira: {
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
}

// const _fields =
//TODO: alterar nome BUILDER ?? design pattern??
export const fieldsBuilder = fieldsFactory(fields)
