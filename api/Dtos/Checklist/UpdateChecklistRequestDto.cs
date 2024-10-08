using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Checklist
{
    public class UpdateChecklistRequestDto
    {
        [Required]
        public required string NumDestaLV { get; set; }
        [Required]
        public required string NumContrato { get; set; }
        [Required]
        public required string NumDocumento { get; set; }
        [Required]
        public required string Projeto { get; set; }
        [Required]
        public required int Revisao { get; set; } = 0;
        [Required]
        public required string Titutlo { get; set; }
        [Required]
        public required string Verificador { get; set; }
        [Required]
        public required string Caminho { get; set; }
        public DateTime DueDate { get; set; }
    }
}