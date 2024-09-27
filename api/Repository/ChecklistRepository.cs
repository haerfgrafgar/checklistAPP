using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Checklist;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class ChecklistRepository : IChecklistRepository
    {
        private readonly ApplicationDBContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly ICheckRepository _checkRepo;

        public ChecklistRepository(ApplicationDBContext context, UserManager<AppUser> userManager, ICheckRepository checkRepo)
        {
            _userManager = userManager;
            _context = context;
            _checkRepo = checkRepo;
        }
        public async Task<Checklist> CloneChecklistAsync(Checklist checklist)
        {
            var newChecklist = await CreateAsync(checklist.ToCreateDtoFromChecklist().ToChecklistFromCreateDto());

            var checkInstance = new Check
            {
                ChecklistId = newChecklist.Id,
                Item = 0,
                Descricao = "",
                Situacao = 0,
                Motivo = ""
            };

            for (int i = 0; i < checklist.Checks.Count; i++)
            {
                checkInstance.Descricao = checklist.Checks[i].Descricao;
                checkInstance.Motivo = checklist.Checks[i].Motivo;
                checkInstance.Item = checklist.Checks[i].Item;
                checkInstance.Situacao = checklist.Checks[i].Situacao;

                await _checkRepo.CreateAsync(checkInstance.ToCreateCheckDto().ToCheckFromCreateDTO(newChecklist.Id));
            }

            newChecklist.AnteriorId = checklist.Id;
            return newChecklist;
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

        public async Task<Checklist?> EnviarParaAprovacao(int id)
        {
            var existingChecklist = await _context.Checklist.FindAsync(id);

            if (existingChecklist == null)
                return null;

            existingChecklist.Versao += 1;
            existingChecklist.ParaVerificar = true;

            await _context.SaveChangesAsync();

            return existingChecklist;
        }

        public async Task<Checklist?> RejeitarChecklist(int id)
        {
            var checklist = await GetByIdAsync(id);

            if (checklist == null)
                return null;

            var newChecklist = await CloneChecklistAsync(checklist);

            newChecklist.Versao += 1;
            newChecklist.ParaVerificar = false;
            newChecklist.AnteriorId = id;

            checklist.Executante = "";
            checklist.Verificador = "";

            await _context.SaveChangesAsync();

            return newChecklist;
        }

        public async Task<List<Checklist>> GetAllAssignedAsync(string username)
        {
            //var appUser = _userManager.FindByNameAsync(username).Result;
            try
            {

                return await _context.Checklist
                    //.Where(x => x.AppUserIdExec == appUser.Id && x.ParaVerificar == false)
                    .Where(x => x.Executante == username && x.ParaVerificar == false)
                    .ToListAsync();
            }
            catch
            {
                return [];
            }
        }

        public async Task<List<Checklist>> GetAllAssignedVerificadorAsync(string username)
        {
            //var appUser = _userManager.FindByNameAsync(username).Result;
            try
            {

                return await _context.Checklist
                    .Where(x => x.Verificador == username && x.ParaVerificar == true)
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

        public async Task<List<Checklist>> GetOlderVersions(int id)
        {
            List<Checklist> anteriores = new List<Checklist>();

            var currentChecklist = await GetByIdAsync(id);

            if (currentChecklist == null)
            {
                return anteriores;
            }

            while (currentChecklist.AnteriorId != 0)
            {
                currentChecklist = await GetByIdAsync(currentChecklist.AnteriorId);
                if (currentChecklist != null)
                    anteriores.Add(currentChecklist);
            }

            return anteriores;
        }
    }
}