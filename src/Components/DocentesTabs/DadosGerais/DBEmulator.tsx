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
      Carreira: "",
    }
  },
}
export default DB
