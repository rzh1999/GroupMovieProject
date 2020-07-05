using Microsoft.EntityFrameworkCore;
using WebAPISample.Models;

namespace WebAPISample.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Seed data - needs migration

            // Seed data - needs migration
            modelBuilder.Entity<Movie>()
             .HasData(
                new Movie { MovieId = 1, Title = "The Departed", Genre = "Drama", Director = "Martin Scorsese", Year = "2006" , ImageURL ="./images/TheDeparted.jpg" },
                new Movie { MovieId = 2, Title = "The Dark Knight", Genre = "Drama", Director = "Christopher Nolan", Year = "2008", ImageURL = "./images/TheDarkKnight.jpg" },
                new Movie { MovieId = 3, Title = "Inception", Genre = "Drama", Director = "Christopher Nolan", Year = "2010", ImageURL = "./images/Inception.jpg"},
                new Movie { MovieId = 4, Title = "Pineapple Express", Genre = "Comedy", Director = "David Gordon Green", Year = "2008", ImageURL = "./images/PineappleExpress.jpg" },
                new Movie { MovieId = 5, Title = "Die Hard", Genre = "Action", Director = "John McTiernan", Year = "1988", ImageURL = "./images/DieHard.jpg" }
             );

        }

        public DbSet<Movie> Movies { get; set; }
    }
}
