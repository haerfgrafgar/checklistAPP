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
  };
};
