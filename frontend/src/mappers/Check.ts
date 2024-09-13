import { Check, CheckDto, ResponseCheckDto } from "../interfaces";

export const mapCheckToCheckDto = (check: Check): CheckDto => {
  return {
    item: check.item,
    descricao: check.descricao,
    situacao: check.situacao,
  };
};

export const mapCheckToRespondCheckDto = (check: Check): ResponseCheckDto => {
  return {
    situacao: check.situacao,
  };
};
