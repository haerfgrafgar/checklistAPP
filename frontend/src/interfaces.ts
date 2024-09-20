export interface Check {
  id: number;
  checklistId: number;
  item: number;
  descricao: string;
  situacao: number;
  motivo: string;
}

export interface CheckDto {
  item: number;
  descricao: string;
  situacao: number;
  motivo: string;
}

export interface AccountDto {
  username: string;
}

export interface ResponseCheckDto {
  situacao: number;
  motivo: string;
}

export interface Checklist {
  id: number;
  numDestaLV: string;
  numContrato: string;
  numDocumento: string;
  projeto: string;
  revisao: number;
  titutlo: string;
  verificador: string;
  executante: string;
  versao: number;
  anteriorId: number;
  paraVerificar: boolean;
  emitido: boolean;
  caminho: string;
  createdOn: string;
  dueDate: string;
  checks: Check[];
}

export interface ChecklistDto {
  numDestaLV: string;
  numContrato: string;
  numDocumento: string;
  projeto: string;
  revisao: number;
  titutlo: string;
  verificador: string;
  executante: string;
  dueDate: string;
}

export interface TokenPayload {
  email: string;
  given_name: string;
  role: string;
  exp: number;
}
