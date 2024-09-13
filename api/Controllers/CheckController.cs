using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Check;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/check")]
    [ApiController]
    public class CheckController : ControllerBase
    {
        private readonly ICheckRepository _checkRepo;
        private readonly IChecklistRepository _checklistRepo;

        public CheckController(ICheckRepository checkRepo, IChecklistRepository checklistRepo)
        {
            _checkRepo = checkRepo;
            _checklistRepo = checklistRepo;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll()
        {
            var checks = await _checkRepo.GetAllAssync();

            var checkDto = checks.Select(check => check.ToCheckDto()).ToList();

            return Ok(checkDto);
        }

        [HttpGet("{id:int}")]
        [Authorize]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var check = await _checkRepo.GetByIdAsync(id);

            if (check == null)
            {
                return NotFound("Check does not exist.");
            }

            return Ok(check.ToCheckDto());
        }

        [HttpPost("{checklistId:int}")]
        [Authorize]
        public async Task<IActionResult> Create([FromRoute] int checklistId, CreateCheckRequestDto checkDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!await _checklistRepo.ChecklistExists(checklistId))
            {
                return BadRequest("Checklist does not exist.");
            }

            var checkModel = checkDto.ToCheckFromCreateDTO(checklistId);

            await _checkRepo.CreateAsync(checkModel);

            //return CreatedAtAction(nameof(GetById), new { id = checkModel.Id}, checkModel.ToCheckDto());
            return Ok(checkModel);
        }

        [HttpPut]
        [Route("{id:int}")]
        [Authorize]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCheckRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var checkModel = await _checkRepo.UpdateAsync(id, updateDto);

            if (checkModel == null)
                return NotFound("Check does not exist.");

            return Ok(checkModel.ToCheckDto());
        }

        [HttpPut]
        [Route("respond/{id:int}")]
        [Authorize]
        public async Task<IActionResult> Respond([FromRoute] int id, [FromBody] RespondCheckRequestDto checkDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var checkModel = await _checkRepo.Respond(id, checkDto);

            if (checkModel == null)
                return NotFound("Check does not exist.");

            return Ok(checkModel.toRespondFromCheck());
        }

        [HttpDelete]
        [Route("{id:int}")]
        [Authorize]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var checkModel = await _checkRepo.DeleteAsync(id);

            if (checkModel == null)
                return NotFound("Check does not exist.");

            return NoContent();
        }
    }
}