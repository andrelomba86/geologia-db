import { FieldsTypes } from "./types"

const DB = {
  getValues(name = null): FieldsTypes {
    return {
      Docente: "Chang Hung Kiang",
      DataAdmissão: new Date(2014, 11, 1),
      Matricula: "600648-6",
      Referencia: "",
      Cargo: "",
      DataCargo: null,
      Carreira:
        '[{"reference":"MS5.1","date":"25/01/2020"},{"reference":"MS3.2","date":"05/01/2005"},{"reference":"MS3.1","date":"02/10/2000"}]',
    }
  },
}
export default DB
