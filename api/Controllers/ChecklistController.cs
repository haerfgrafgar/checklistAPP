using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Checklist;
using api.Extensions;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/checklist")]
    [ApiController]
    public class ChecklistController : ControllerBase
    {
        private readonly IChecklistRepository _checklistRepo;
        private readonly UserManager<AppUser> _userManager;
        public ChecklistController(IChecklistRepository checklistRepo, UserManager<AppUser> userManager)
        {
            _checklistRepo = checklistRepo;
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll()
        {
            var checklists = await _checklistRepo.GetAllAsync();

            var checklistDto = checklists.Select(checklist => checklist.toChecklistDto()).ToList();

            return Ok(checklistDto);
        }

        [HttpGet("{id:int}")]
        [Authorize]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var checklist = await _checklistRepo.GetByIdAsync(id);

            if (checklist == null)
                return NotFound("Checklist does not exist.");

            return Ok(checklist.toChecklistDto());
        }

        [HttpGet("{username}")]
        [Authorize]
        public async Task<IActionResult> GetAllAssigned([FromRoute] string username)
        {
            var checklists = await _checklistRepo.GetAllAssignedAsync(username);

            var checklistDto = checklists.Select(checklist => checklist.toChecklistDto()).ToList();

            return Ok(checklistDto);
        }

        [HttpGet("verificador/{username}")]
        [Authorize]
        public async Task<IActionResult> GetAllAssignedVerificador([FromRoute] string username)
        {
            var checklist = await _checklistRepo.GetAllAssignedVerificadorAsync(username);

            var checklistDto = checklist.Select(checklist => checklist.toChecklistDto()).ToList();

            return Ok(checklist);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create([FromBody] CreateChecklistRequestDto checklistDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var cordUsername = User.GetUsername();
            var appUserCord = await _userManager.FindByNameAsync(cordUsername);
            var appUserExec = await _userManager.FindByNameAsync(checklistDto.Executante);

            if (appUserExec == null)
                return BadRequest("Executante não existe");

            var checklistModel = checklistDto.ToChecklistFromCreateDto();
            checklistModel.AppUserIdCord = appUserCord.Id;
            checklistModel.AppUserIdExec = appUserExec.Id;

            await _checklistRepo.CreateAsync(checklistModel);

            return CreatedAtAction(nameof(GetById), new { id = checklistModel.Id }, checklistModel.toChecklistDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        [Authorize]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateChecklistRequestDto checklistDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var checklistModel = await _checklistRepo.UpdateAsync(id, checklistDto);

            if (checklistModel == null)
                return NotFound("Checklist does not exist.");

            return Ok(checklistModel.toChecklistDto());
        }

        [HttpPut("enviar/{id:int}")]
        [Authorize]
        public async Task<IActionResult> EnviarParaAprovacao([FromRoute] int id)
        {
            var checklistModel = await _checklistRepo.EnviarParaAprovacao(id);

            if (checklistModel == null)
                return NotFound("Checklist does not exist.");

            return Ok(checklistModel.toChecklistDto());
        }

        [HttpDelete("{id:int}")]
        [Authorize]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var checklist = await _checklistRepo.DeleteAsync(id);

            if (checklist == null)
                return NotFound("Checklist not found.");

            return Ok(checklist.toChecklistDto());
        }
    }
}