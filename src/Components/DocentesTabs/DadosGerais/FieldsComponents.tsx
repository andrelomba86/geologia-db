import { Form } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers'
const docentes_list = [
  { text: 'Cesar Augusto Moreira', value: 'Cesar Augusto Moreira' },
  { text: 'Chang Hung Kiang', value: 'Chang Hung Kiang' },
  { text: 'Daniel Marcos Bonotto', value: 'Daniel Marcos Bonotto' },
]

const fields = [
  [
    {
      component: Form.Dropdown,
      fieldName: 'Docente',
      props: {
        label: 'Nome',
        options: docentes_list,
        placeholder: 'Nome do docente',
        search: true,
        selection: true,
        allowAdditions: true,
        // value={docenteSelecionado}
        // onAddItem={handleNomeAdd}
        // onChange={(_e, { value }: any) => setDocenteSelecionado(value)}

        // onChange: (_e: any, { value }: any) => setDocenteSelecionado(value),
      },
    },
  ],
  [
    {
      component: SemanticDatepicker,
      fieldName: 'DataAdmissão',
      props: {
        label: 'Data de admissão',
        allowOnlyNumbers: 'true',
        format: 'DD/MM/YYYY',
        locale: 'pt-BR',
      },
    },
    {
      component: Form.Input,
      fieldName: 'Matricula',
      props: {
        label: 'Matrícula',
      },
    },
    {
      component: Form.Input,
      fieldName: 'Referencia',
      props: {
        label: 'Referência',
      },
    },
  ],
  [
    {
      component: Form.Input,
      fieldName: 'Cargo',
      props: {
        label: 'Cargo',
      },
    },
    {
      component: SemanticDatepicker,
      fieldName: 'DataCargo',
      props: {
        label: 'Início no cargo',
      },
    },
    {
      component: Form.Input,
      fieldName: 'Carreira',
      props: {
        label: 'Carreira',
      },
    },
  ],
]
export default fields
