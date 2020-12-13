import React from 'react'
import { Tab } from 'semantic-ui-react'

import * as DadosGerais from './DadosGerais'
import * as Projetos from './Projetos'

const panes = [
  { menuItem: DadosGerais.tabName, render: () => <DadosGerais.default /> },
  { menuItem: Projetos.tabName, render: () => <Projetos.default /> },
]

const DocentesTabs = () => (
  <Tab
    menu={{ color: 'teal', inverted: true, attached: true, tabular: false }}
    panes={panes}
  />
)

export default DocentesTabs
