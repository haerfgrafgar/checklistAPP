using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Check;
using api.Models;

namespace api.Interfaces
{
    public interface ICheckRepository
    {
        Task<List<Check>> GetAllAssync();
        Task<Check?> GetByIdAsync(int id);
        Task<Check> CreateAsync(Check checkModel);
        Task<bool> CheckExists(int id);
        Task<Check?> UpdateAsync(int id, UpdateCheckRequestDto updateDto);
        Task<Check?> DeleteAsync(int id);
        Task<Check?> Respond(int id, RespondCheckRequestDto checkDto);
    }
}