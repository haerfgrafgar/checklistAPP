using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("Checks")]
    public class Check
    {
        public int Id { get; set; }
        public int ChecklistId { get; set; }
        public int Item { get; set; }
        public required string Descricao { get; set; }
        public int Situacao { get; set; } = 0;
        //1: Conforme     2: NaoConforme      3: NaoAplicavel      4: Pendente
        public string Motivo { get; set; }
    }
}