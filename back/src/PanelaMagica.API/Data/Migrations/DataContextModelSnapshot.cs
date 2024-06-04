﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PanelaMagica.API.Data;

#nullable disable

namespace PanelaMagica.API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.28");

            modelBuilder.Entity("PanelaMagica.API.Models.Receita", b =>
                {
                    b.Property<int>("ReceitaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ImagemURL")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente1")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente10")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente11")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente12")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente13")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente2")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente3")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente4")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente5")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente6")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente7")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente8")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ingrediente9")
                        .HasColumnType("TEXT");

                    b.Property<string>("NomeDaReceita")
                        .HasColumnType("TEXT");

                    b.Property<string>("Preparo")
                        .HasColumnType("TEXT");

                    b.HasKey("ReceitaId");

                    b.ToTable("Receitas");
                });
#pragma warning restore 612, 618
        }
    }
}
