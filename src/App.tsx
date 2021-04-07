import React, { ReactElement } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//import 'fontsource-roboto'
import TopMenu from "./Components/TopMenu"
import Docentes from "./Components/Docentes"
// import { Container } from 'semantic-ui-react'
// import "primereact/resources/themes/saga-blue/theme.css"
// import "primereact/resources/themes/md-light-indigo/theme.css"
import "./App.css"
// import "primereact/resources/themes/saga-blue/theme.css"
import "./theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import { locale, addLocale } from "primereact/api"
// https://www.primefaces.org/primereact/showcase/#/primeflex

import PrimeReact from "primereact/api"
PrimeReact.ripple = true
addLocale("pt", {
  firstDayOfWeek: 1,
  dayNames: [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ],
  dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
  dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
  monthNames: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ],
  monthNamesShort: [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ],
  dateFormat: "dd/mm/yy",
  today: "Hoje",
  clear: "Limpar",
})

function App(): ReactElement {
  locale("pt")
  return (
    <div className="App">
      <Router>
        <TopMenu />

        <Switch>
          <Route exact path="/">
            {/* <Docentes /> */}
          </Route>
          <Route path="/Docentes">
            <Docentes />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
