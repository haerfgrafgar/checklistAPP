using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("Checklist")]
    public class Checklist
    {
        public int Id { get; set; }
        public required string NumDestaLV { get; set; }
        public required string NumContrato { get; set; }
        public required string NumDocumento { get; set; }
        public required string Projeto { get; set; }
        public required int Revisao { get; set; }
        public required string Titutlo { get; set; }
        public required string Verificador { get; set; }
        public required string Executante { get; set; }
        public required int Versao { get; set; }
        public required int AnteriorId { get; set; }
        public required bool ParaVerificar { get; set; }
        public required bool Emitido { get; set; }
        public required string Caminho { get; set; }

        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public DateTime DueDate { get; set; }
        public List<Check> Checks { get; set; } = new List<Check>();

        public required string AppUserIdCord { get; set; }
        public AppUser AppUserCord { get; set; }
        public required string AppUserIdExec { get; set; }
        public AppUser AppUserExec { get; set; }
    }
}