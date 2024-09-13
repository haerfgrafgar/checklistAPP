using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Check
{
    public class CreateCheckRequestDto
    {
        [Required]
        public int Item { get; set; }
        [Required]
        [MaxLength(150)]
        public required string Descricao { get; set; }
        [Required]
        [Range(0, 4)]
        public int Situacao { get; set; } = 0;
        //1: Conforme     2: NaoConforme      3: NaoAplicavel      4: Pendente
    }
}