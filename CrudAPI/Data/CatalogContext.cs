using CodeTest.Models;
using Microsoft.EntityFrameworkCore;

namespace CrudAPI.Data
{
    public class CatalogContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public CatalogContext(DbContextOptions<CatalogContext> options)
            : base(options)
        {
        }
    }
}
