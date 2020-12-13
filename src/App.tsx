import React, { ReactElement } from 'react'
//import 'fontsource-roboto'
import TopMenu from './Components/TopMenu'
import Docentes from './Components/Docentes'
import { Container } from 'semantic-ui-react'

function App(): ReactElement {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
      <TopMenu />
      <Container>
        <Docentes />
      </Container>
      {/* </ThemeProvider> */}
    </div>
  )
}

export default App

// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

// declare module '@material-ui/core/styles/createMuiTheme' {
//   interface Theme {
//     status: {
//       danger: string
//     }
//   }
//   // allow configuration using `createMuiTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string
//     }
//   }
// }

// const theme = createMuiTheme({
//   spacing: 10,
// })
