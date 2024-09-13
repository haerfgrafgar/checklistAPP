using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Checklist;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class ChecklistRepository : IChecklistRepository
    {
        private readonly ApplicationDBContext _context;
        private readonly UserManager<AppUser> _userManager;

        public ChecklistRepository(ApplicationDBContext context, UserManager<AppUser> userManager)
        {
            _userManager = userManager;
            _context = context;
        }

        public async Task<bool> ChecklistExists(int id)
        {
            return await _context.Checklist.AnyAsync(checklist => checklist.Id == id);
        }

        public async Task<Checklist> CreateAsync(Checklist checklist)
        {
            await _context.Checklist.AddAsync(checklist);
            await _context.SaveChangesAsync();

            return checklist;
        }

        public async Task<Checklist?> DeleteAsync(int id)
        {
            var existingChecklist = await _context.Checklist.FindAsync(id);

            if (existingChecklist == null)
                return null;

            _context.Checklist.Remove(existingChecklist);
            await _context.SaveChangesAsync();

            return existingChecklist;
        }

        public async Task<List<Checklist>> GetAllAssignedAsync(string username)
        {
            var appUser = _userManager.FindByNameAsync(username).Result;
            try
            {

                return await _context.Checklist
                    .Include(x => x.Checks)
                    .Where(x => x.AppUserIdExec == appUser.Id)
                    .ToListAsync();
            }
            catch
            {
                return [];
            }
        }

        public async Task<List<Checklist>> GetAllAsync()
        {
            return await _context.Checklist.ToListAsync();
        }

        public async Task<Checklist?> GetByIdAsync(int id)
        {
            return await _context.Checklist.Include(x => x.Checks.OrderBy(c => c.Item)).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Checklist?> UpdateAsync(int id, UpdateChecklistRequestDto checklistDto)
        {
            var existingChecklist = GetByIdAsync(id);

            if (existingChecklist.Result == null)
                return null;

            existingChecklist.Result.NumDestaLV = checklistDto.NumDestaLV;
            existingChecklist.Result.NumContrato = checklistDto.NumContrato;
            existingChecklist.Result.NumDocumento = checklistDto.NumDocumento;
            existingChecklist.Result.Projeto = checklistDto.Projeto;
            existingChecklist.Result.Revisao = checklistDto.Revisao;
            existingChecklist.Result.Titutlo = checklistDto.Titutlo;
            existingChecklist.Result.Verificador = checklistDto.Verificador;
            existingChecklist.Result.DueDate = checklistDto.DueDate;

            await _context.SaveChangesAsync();

            return existingChecklist.Result;
        }
    }
}