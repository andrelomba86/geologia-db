import { ReactElement } from 'react'

export interface MenuItem {
  title: string
  name: string
  component: ReactElement
  icon?: string
}
export interface MenuItems extends Array<MenuItem> {}

export enum TabsDocentes {
  DADOS_GERAIS = 1,
  PROJETOS = 2,
  RELATORIO = 3,
}

export const initialData = {
  DataAdmissão: '10/10/2019',
  Cargo: '',
  DataCargo: '',
  Referencia: '',
  Carreira:
    'MS5.1,18/07/1997 00:00:00;MS6,08/06/2011 00:00:00;MS3.1,26/06/1987 00:00:00',
  RegimeTrabalho: '',
  RegimeJurídico: '',
  RegimeAplicação: '',
  RegimeConfirmação: '',
  Matricula: '',
  Endereço: '',
  Email: '',
  TelefoneResidencial: '',
  TelefoneCelular: '',
  TelefoneOutro: '',
  CPF: '',
  RG: '',
  PIS: '',
  CREA: '',
  DataNascimento: '',
  BancoNumero: '',
  BancoAgencia: '',
  BancoConta: '',
}
