using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Check;
using api.Models;

namespace api.Mappers
{
    public static class CheckMapper
    {
        public static CheckDto ToCheckDto(this Check checkModel)
        {
            return new CheckDto
            {
                Id = checkModel.Id,
                ChecklistId = checkModel.ChecklistId,
                Item = checkModel.Item,
                Situacao = checkModel.Situacao,
                Descricao = checkModel.Descricao,
                Motivo = checkModel.Motivo,
            };
        }

        public static Check ToCheckFromCreateDTO(this CreateCheckRequestDto checkDto, int checklistId)
        {
            return new Check
            {
                ChecklistId = checklistId,
                Item = checkDto.Item,
                Situacao = checkDto.Situacao,
                Descricao = checkDto.Descricao,
                Motivo = checkDto.Motivo,
            };
        }

        public static RespondCheckRequestDto toRespondFromCheck(this Check check)
        {
            return new RespondCheckRequestDto
            {
                Situacao = check.Situacao,
                Motivo = check.Motivo,
            };
        }
    }
}