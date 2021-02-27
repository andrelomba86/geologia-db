import React from 'react'
import { Tab } from 'semantic-ui-react'

import DadosGerais from './DadosGerais/index'
import Projetos from './Projetos'

const panes = [
  { menuItem: 'Dados Gerais', render: () => <DadosGerais /> },
  { menuItem: 'Projetos', render: () => <Projetos /> },
]

const DocentesTabs = () => (
  <Tab
    menu={{ color: 'teal', inverted: true, attached: true, tabular: false }}
    panes={panes}
  />
)

export default DocentesTabs
