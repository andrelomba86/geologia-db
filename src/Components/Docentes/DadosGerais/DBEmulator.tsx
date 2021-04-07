import { DropdownItems, FieldsType } from "../../GlobalTypes"
const DB = {
  getValues(name = null): FieldsType {
    return {
      Docente: "Chang Hung Kiang",
      DataAdmissão: new Date(2014, 11, 1),
      Matricula: "600648-6",
      Referencia: "",
      Cargo: "Professor Titular",
      DataCargo: null,
      Carreira:
        '[{"Referencia":"MS5.1","Data":"25/01/2020"},{"Referencia":"MS3.2","Data":"05/01/2005"},{"Referencia":"MS3.1","Data":"02/10/2000"}]',
      RegimeJurídico: "EF. PP. QDUNESP",
    }
  },
  // Field TYPES ?
  fetch: async (field: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const list: DropdownItems = {
      Docente: [
        { item: "Cesar Augusto Moreira" },
        { item: "Chang Hung Kiang" },
        { item: "Daniel Marcos Bonotto" },
      ],
      Cargo: [
        { item: "Professor Assistente" },
        { item: "Professor Assistente Doutor" },
        { item: "Professor Titular" },
      ],
      RegimeJurídico: [{ item: "EF. PP. QDUNESP" }, { item: "CLT" }],
      RegimeDeTrabalho: [{ item: "RDIDP" }, { item: "RTC" }, { item: "RTP" }],
    }

    // alert(docentes)
    return list[field as string]
  },
}
export default DB
