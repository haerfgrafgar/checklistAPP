using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
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

        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public DateTime DueDate { get; set; }
        public List<Check> Checks { get; set; } = new List<Check>();

        public string AppUserIdCord { get; set; }
        public AppUser AppUserCord { get; set; }
        public string AppUserIdExec { get; set; }
        public AppUser AppUserExec { get; set; }
    }
}