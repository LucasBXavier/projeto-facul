namespace PanelaMagica.API.Models
{
    public class Receita
    {
        public int ReceitaId { get; set; }
        public string? NomeDaReceita { get; set; }
        public string? Ingrediente1 { get; set; }
        public string? Ingrediente2 { get; set; }

        public string? Ingrediente3 { get; set; }

        public string? Ingrediente4 { get; set; }

        public string? Ingrediente5 { get; set; }

        public string? Ingrediente6 { get; set; }
        public string? ImagemURL { get; set; }

    }
}