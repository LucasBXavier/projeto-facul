using Microsoft.AspNetCore.Mvc;
using PanelaMagica.API.Data;
using PanelaMagica.API.Models;
using SQLitePCL;
using Microsoft.EntityFrameworkCore;

namespace PanelaMagica.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReceitasController : ControllerBase
{
    private readonly DataContext _context;
    public ReceitasController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IEnumerable<Receita> Get()
    {
        return _context.Receitas;

    }

    [HttpGet("{id}")]
    public Receita GetById(int id)
    {
        return _context.Receitas.FirstOrDefault(receita => receita.ReceitaId == id);
    }
}
