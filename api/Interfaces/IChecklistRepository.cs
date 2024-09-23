using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Checklist;
using api.Models;

namespace api.Interfaces
{
    public interface IChecklistRepository
    {
        Task<List<Checklist>> GetAllAsync();
        Task<Checklist?> GetByIdAsync(int id);
        Task<List<Checklist>> GetAllAssignedAsync(string username);
        Task<List<Checklist>> GetAllAssignedVerificadorAsync(string username);
        Task<bool> ChecklistExists(int id);
        Task<Checklist?> DeleteAsync(int id);
        Task<Checklist> CreateAsync(Checklist checklist);
        Task<Checklist?> UpdateAsync(int id, UpdateChecklistRequestDto checklistDto);
        Task<Checklist?> EnviarParaAprovacao(int id);
        Task<Checklist?> RejeitarChecklist(int id);
        Task<Checklist> CloneChecklistAsync(Checklist checklist);
        Task<List<Checklist>> GetOlderVersions(int id);
    }
}