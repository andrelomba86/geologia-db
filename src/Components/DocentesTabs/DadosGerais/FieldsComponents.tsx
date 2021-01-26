// import React from 'react'
import { Form } from 'semantic-ui-react'
import { FieldStateArray } from '../../Global'
import DateInput from '../../DateInput'

const docentes_list = [
  { text: 'Cesar Augusto Moreira', value: 'Cesar Augusto Moreira' },
  { text: 'Chang Hung Kiang', value: 'Chang Hung Kiang' },
  { text: 'Daniel Marcos Bonotto', value: 'Daniel Marcos Bonotto' },
]
//  interface FormState extends React.FunctionComponent<any> {
//   [index: string]: {
//     value: any
//   }
// }

const fields: FieldStateArray = [
  [
    {
      fieldName: 'Docente',
      component: Form.Dropdown,
      props: {
        label: 'Nome',
        placeholder: 'Nome do docente',
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
      fieldName: 'DataAdmissão',
      component: DateInput,
      props: {
        label: 'Data de admissão',
        placeholder: 'DD/MM/AAAA',
        width: 3,
      },
    },
    {
      fieldName: 'Matricula',
      component: Form.Input,
      props: {
        label: 'Matrícula',
        width: 3,
      },
    },
    {
      fieldName: 'Referencia',
      component: Form.Input,
      props: {
        label: 'Referência',
        width: 3,
      },
    },
  ],
  [
    {
      fieldName: 'Cargo',
      component: Form.Dropdown,
      props: {
        label: 'Cargo',
        search: true,
        selection: true,
        allowAdditions: true,
        options: null,
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
      component: Form.Input,
      fieldName: 'Carreira',
      props: {
        label: 'Carreira',
        width: 4,
      },
    },
  ],
]
export default fields
