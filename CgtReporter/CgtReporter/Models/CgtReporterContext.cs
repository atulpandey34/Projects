using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CgtReporter.Models
{
    public partial class CgtReporterContext : DbContext
    {
        public virtual DbSet<Portfolio> Portfolio { get; set; }
        public virtual DbSet<PortfolioSecurityHeld> PortfolioSecurityHeld { get; set; }

    public CgtReporterContext(DbContextOptions<CgtReporterContext> options)
   : base(options)
    {

    }

    //        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //        {
    //            if (!optionsBuilder.IsConfigured)
    //            {
    //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
    //                optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;Initial Catalog=CgtReporter;Integrated Security=SSPI;");
    //            }
    //        }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Portfolio>(entity =>
            {
                entity.Property(e => e.PortfolioName)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<PortfolioSecurityHeld>(entity =>
            {
                entity.Property(e => e.Asx)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.HasOne(d => d.Portfolio)
                    .WithMany(p => p.PortfolioSecurityHeld)
                    .HasForeignKey(d => d.PortfolioId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PortfolioSecurityHeld_Portfolio");
            });
        }
    }
}
