using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Check;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class CheckRepository : ICheckRepository
    {
        private readonly ApplicationDBContext _context;
        public CheckRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<bool> CheckExists(int id)
        {
            return await _context.Checks.AnyAsync(check => check.Id == id);
        }

        public async Task<Check> CreateAsync(Check checkModel)
        {
            await _context.Checks.AddAsync(checkModel);
            await _context.SaveChangesAsync();
            return checkModel;
        }

        public async Task<Check?> DeleteAsync(int id)
        {
            var existingCheck = await _context.Checks.FindAsync(id);

            if (existingCheck == null)
                return null;

            _context.Checks.Remove(existingCheck);
            await _context.SaveChangesAsync();

            return existingCheck;
        }

        public async Task<List<Check>> GetAllAssync()
        {
            var checks = await _context.Checks.ToListAsync();
            return checks;
        }

        public async Task<Check?> GetByIdAsync(int id)
        {
            return await _context.Checks.FindAsync(id);
        }

        public async Task<Check?> Respond(int id, RespondCheckRequestDto checkDto)
        {
            var existingCheck = await _context.Checks.FindAsync(id);

            if (existingCheck == null)
                return null;

            existingCheck.Situacao = checkDto.Situacao;
            existingCheck.Motivo = checkDto.Motivo;

            await _context.SaveChangesAsync();

            return existingCheck;
        }

        public async Task<Check?> UpdateAsync(int id, UpdateCheckRequestDto updateDto)
        {
            var existingCheck = await _context.Checks.FindAsync(id);

            if (existingCheck == null)
                return null;

            existingCheck.Descricao = updateDto.Descricao;
            existingCheck.Situacao = updateDto.Situacao;
            existingCheck.Item = updateDto.Item;

            await _context.SaveChangesAsync();

            return existingCheck;
        }
    }
}