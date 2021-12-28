using Microsoft.EntityFrameworkCore;

namespace ActualAPI.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<AddressBook> AddressBook { get; set; }
    }
}
