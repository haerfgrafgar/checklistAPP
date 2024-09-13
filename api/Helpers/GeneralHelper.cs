using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace api.Helpers
{
    public class GeneralHelper
    {
        private readonly ApplicationDBContext _context;

        public GeneralHelper(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<bool> UserExistsByIdAsync(string userId)
        {
            var user = await _context.Users.FindAsync(userId);
            return user != null;
        }

        public async Task<bool> UserExistsByUsernameAsync(string username)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == username);
            return user != null;
        }
    }
}