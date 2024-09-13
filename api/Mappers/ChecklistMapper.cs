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
                Checks = checklist.Checks?.Select(checks => checks.ToCheckDto()).ToList()
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
                DueDate = checklistDto.DueDate
            };
        }
    }
}