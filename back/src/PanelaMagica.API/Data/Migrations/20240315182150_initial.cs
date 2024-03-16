using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PanelaMagica.API.Data.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Receitas",
                columns: table => new
                {
                    ReceitaId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeDaReceita = table.Column<string>(type: "TEXT", nullable: true),
                    Ingrediente1 = table.Column<string>(type: "TEXT", nullable: true),
                    Ingrediente2 = table.Column<string>(type: "TEXT", nullable: true),
                    Ingrediente3 = table.Column<string>(type: "TEXT", nullable: true),
                    Ingrediente4 = table.Column<string>(type: "TEXT", nullable: true),
                    Ingrediente5 = table.Column<string>(type: "TEXT", nullable: true),
                    Ingrediente6 = table.Column<string>(type: "TEXT", nullable: true),
                    ImagemURL = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Receitas", x => x.ReceitaId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Receitas");
        }
    }
}
