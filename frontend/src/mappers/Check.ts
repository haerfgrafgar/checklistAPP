import { Check, CheckDto, ResponseCheckDto } from "../interfaces";

export const mapCheckToCheckDto = (check: Check): CheckDto => {
  return {
    item: check.item,
    descricao: check.descricao,
    situacao: check.situacao,
    motivo: check.motivo,
  };
};

export const mapCheckToRespondCheckDto = (check: Check): ResponseCheckDto => {
  return {
    situacao: check.situacao,
    motivo: check.motivo,
  };
};
