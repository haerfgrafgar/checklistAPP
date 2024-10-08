using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Checklist;
using api.Models;

namespace api.Mappers
{
    public static class ChecklistMapper
    {
        public static ChecklistDto toChecklistDto(this Checklist checklist)
        {
            return new ChecklistDto
            {
                Id = checklist.Id,
                NumDestaLV = checklist.NumDestaLV,
                NumContrato = checklist.NumContrato,
                NumDocumento = checklist.NumDocumento,
                Projeto = checklist.Projeto,
                Revisao = checklist.Revisao,
                Titutlo = checklist.Titutlo,
                Verificador = checklist.Verificador,
                Executante = checklist.Executante,
                DueDate = checklist.DueDate,
                Checks = checklist.Checks?.Select(checks => checks.ToCheckDto()).ToList(),
                Caminho = checklist.Caminho,
                Emitido = checklist.Emitido,
                ParaVerificar = checklist.ParaVerificar,
                Versao = checklist.Versao,
                AnteriorId = checklist.AnteriorId,
            };
        }

        public static Checklist ToChecklistFromCreateDto(this CreateChecklistRequestDto checklistDto)
        {
            return new Checklist
            {
                NumDestaLV = checklistDto.NumDestaLV,
                NumContrato = checklistDto.NumContrato,
                NumDocumento = checklistDto.NumDocumento,
                Projeto = checklistDto.Projeto,
                Revisao = checklistDto.Revisao,
                Titutlo = checklistDto.Titutlo,
                Verificador = checklistDto.Verificador,
                Executante = checklistDto.Executante,
                CreatedOn = checklistDto.CreatedOn,
                DueDate = checklistDto.DueDate,
                Caminho = checklistDto.Caminho,
                Emitido = checklistDto.Emitido,
                ParaVerificar = checklistDto.ParaVerificar,
                Versao = checklistDto.Versao,
                AnteriorId = checklistDto.AnteriorId,
                AppUserIdCord = "",
                AppUserIdExec = "",
            };
        }

        public static CreateChecklistRequestDto ToCreateDtoFromChecklist(this Checklist checklistDto)
        {
            return new CreateChecklistRequestDto
            {
                NumDestaLV = checklistDto.NumDestaLV,
                NumContrato = checklistDto.NumContrato,
                NumDocumento = checklistDto.NumDocumento,
                Projeto = checklistDto.Projeto,
                Revisao = checklistDto.Revisao,
                Titutlo = checklistDto.Titutlo,
                Verificador = checklistDto.Verificador,
                Executante = checklistDto.Executante,
                CreatedOn = checklistDto.CreatedOn,
                DueDate = checklistDto.DueDate,
                Caminho = checklistDto.Caminho,
                Emitido = checklistDto.Emitido,
                ParaVerificar = checklistDto.ParaVerificar,
                Versao = checklistDto.Versao,
                AnteriorId = checklistDto.AnteriorId,
            };
        }
    }
}