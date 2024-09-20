using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using api.Helpers;
using api.Utility;

namespace api.Dtos.Checklist
{
    public class CreateChecklistRequestDto
    {

        [Required]
        public required string NumDestaLV { get; set; }
        [Required]
        public required string NumContrato { get; set; }
        [Required]
        public required string NumDocumento { get; set; }
        [Required]
        public required string Projeto { get; set; }
        public required int Revisao { get; set; } = 0;
        [Required]
        public required string Titutlo { get; set; }
        [Required]
        public required string Verificador { get; set; }
        [Required]
        public required string Executante { get; set; }
        public int Versao { get; set; } = 1;
        public int AnteriorId { get; set; } = 0;
        public bool ParaVerificar { get; set; } = false;
        public bool Emitido { get; set; } = false;
        [Required]
        public required string Caminho { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public DateTime DueDate { get; set; }
    }
}