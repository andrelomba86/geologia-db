import React, { useState } from 'react'
import { Form, Tab } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers'

export const tabName = 'Dados Gerais'

export default function DadosGerais() {
  const docentes = [
    { text: 'Cesar Augusto Moreira', value: 'Cesar Augusto Moreira' },
    { text: 'Chang Hung Kiang', value: 'Chang Hung Kiang' },
    { text: 'Daniel Marcos Bonotto', value: 'Daniel Marcos Bonotto' },
  ]

  const [docenteSelecionado, setDocenteSelecionado] = useState(
    docentes[0].value
  )
  const handleNomeAdd = () => {}

  return (
    <Tab.Pane>
      <Form>
        <Form.Group widths="2">
          <Form.Dropdown
            label="Nome"
            options={docentes}
            placeholder="Nome do docente"
            search
            selection
            fluid
            allowAdditions
            value={docenteSelecionado}
            onAddItem={handleNomeAdd}
            onChange={(_e, { value }: any) => setDocenteSelecionado(value)}
          />
        </Form.Group>
        <Form.Group widths="4">
          {/* <Form.Input fluid label="Data de admissão" /> */}
          <SemanticDatepicker label="Data de admissão" />
          <Form.Input fluid label="Matrícula" />
          <Form.Input fluid label="Referência" />
        </Form.Group>
        <Form.Group widths="4">
          <Form.Input fluid label="Cargo" />
          <SemanticDatepicker label="Início no cargo" />
          <Form.Input fluid label="Carreira" />
        </Form.Group>

        <Form.TextArea
          label="Observações"
          placeholder="Outras informações..."
        />

        <Form.Button>Submit</Form.Button>
      </Form>
    </Tab.Pane>
  )
}
