export interface FormState {
  [index: string]: {
    value: any
  }
}

export const fieldsState: FormState = {
  Docente: {
    value: 'Chang Hung Kiang',
    // set: () => {},
    // setSelected: () => {},
  },
  DataAdmissão: {
    value: new Date(
      'Fri Dec 04 2020 00:00:00 GMT-0300 (Horário Padrão de Brasília)'
    ),
  },
  Matricula: {
    value: '600648-6',
  },
  Referencia: {
    value: '',
  },
  Cargo: {
    value: '',
  },
  DataCargo: {
    value: '',
  },
  Carreira: {
    value: '',
  },
}

export default fieldsState
// const DadosGeraisContext = React.createContext<DocenteContext>(defaultContext)
// export default DadosGeraisContext

/* ---------- */
