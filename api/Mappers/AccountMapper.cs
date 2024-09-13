using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Account;
using api.Models;

namespace api.Mappers
{
    public static class AccountMapper
    {
        public static AccountDto toAccountDto(this AppUser appUser)
        {
            return new AccountDto
            {
                username = appUser.UserName,
            };
        }
    }
}