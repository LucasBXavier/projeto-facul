using Microsoft.EntityFrameworkCore;
using PanelaMagica.API.Models;

namespace PanelaMagica.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Receita> Receitas { get; set; }
    }
}