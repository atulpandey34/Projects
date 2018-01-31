using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace HelloWorld.Models
{
    public partial class CgtReporterContext : DbContext
    {
    public CgtReporterContext(DbContextOptions<CgtReporterContext> options)
    : base(options)
    {

    }
        public virtual DbSet<Portfolio> Portfolio { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=CgtReporter;Trusted_Connection=True;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Portfolio>(entity =>
            {
                entity.Property(e => e.PortfolioName).HasMaxLength(100);
            });
        }
    }
}
