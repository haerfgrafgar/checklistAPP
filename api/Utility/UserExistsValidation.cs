using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using api.Helpers;

namespace api.Utility
{
    public class UserExistsValidation : ValidationAttribute
    {

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            var _context = (ApplicationDbContext)validationContext.GetService(typeof(ApplicationDbContext));

            var user = _context.GetType();
            Console.WriteLine(user);

            if (value.Equals("string"))
                return ValidationResult.Success;
            return new ValidationResult("Errado.");
        }
    }

    internal class ApplicationDbContext
    {
    }
}