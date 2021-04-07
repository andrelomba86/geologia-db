import React from "react"
import { Container } from "../Basics"
import { TabView, TabPanel } from "primereact/tabview"
import { Card } from "primereact/card"
import DadosGerais from "./DadosGerais"

export default function Docentes(): React.ReactElement {
  return (
    <Container>
      <Card className="p-lg-9 p-mt-6">
        <TabView>
          <TabPanel header="Dados gerais">
            <DadosGerais />
          </TabPanel>
          <TabPanel header="Projetos">X</TabPanel>
        </TabView>
      </Card>
    </Container>
  )
}
