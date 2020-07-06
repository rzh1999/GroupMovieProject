using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPISample.Migrations
{
    public partial class nuked : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    MovieId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: false),
                    Director = table.Column<string>(nullable: true),
                    Genre = table.Column<string>(nullable: true),
                    Year = table.Column<string>(nullable: true),
                    ImageURL = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.MovieId);
                });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "MovieId", "Director", "Genre", "ImageURL", "Title", "Year" },
                values: new object[,]
                {
                    { 1, "Martin Scorsese", "Drama", "./images/TheDeparted.jpg", "The Departed", "2006" },
                    { 2, "Christopher Nolan", "Drama", "./images/TheDarkKnight.jpg", "The Dark Knight", "2008" },
                    { 3, "Christopher Nolan", "Drama", "./images/Inception.jpg", "Inception", "2010" },
                    { 4, "David Gordon Green", "Comedy", "./images/PineappleExpress.jpg", "Pineapple Express", "2008" },
                    { 5, "John McTiernan", "Action", "./images/DieHard.jpg", "Die Hard", "1988" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
