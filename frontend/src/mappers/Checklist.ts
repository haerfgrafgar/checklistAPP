import { Checklist, ChecklistDto } from "../interfaces";

export const mapChecklistToChecklistDto = (
  checklist: Checklist
): ChecklistDto => {
  return {
    dueDate: checklist.dueDate,
    numContrato: checklist.numContrato,
    numDestaLV: checklist.numDestaLV,
    numDocumento: checklist.numDocumento,
    projeto: checklist.projeto,
    revisao: checklist.revisao,
    titutlo: checklist.titutlo,
    verificador: checklist.verificador,
    executante: checklist.executante,
    anteriorId: checklist.anteriorId,
    caminho: checklist.caminho,
    emitido: checklist.emitido,
    paraVerificar: checklist.paraVerificar,
    versao: checklist.versao,
  };
};
