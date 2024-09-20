using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class checklistUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "151ac418-833b-4969-81d9-5c1ee7c56025");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "712237f3-613a-4d13-a7d3-49f3143164ee");

            migrationBuilder.AddColumn<int>(
                name: "AnteriorId",
                table: "Checklist",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Caminho",
                table: "Checklist",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Emitido",
                table: "Checklist",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "ParaVerificar",
                table: "Checklist",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Versao",
                table: "Checklist",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2b98bff6-74b8-4b1d-b0e6-53dbd2d891fb", null, "Admin", "ADMIN" },
                    { "cc717f88-b58a-4065-88d8-66255e128fe7", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2b98bff6-74b8-4b1d-b0e6-53dbd2d891fb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cc717f88-b58a-4065-88d8-66255e128fe7");

            migrationBuilder.DropColumn(
                name: "AnteriorId",
                table: "Checklist");

            migrationBuilder.DropColumn(
                name: "Caminho",
                table: "Checklist");

            migrationBuilder.DropColumn(
                name: "Emitido",
                table: "Checklist");

            migrationBuilder.DropColumn(
                name: "ParaVerificar",
                table: "Checklist");

            migrationBuilder.DropColumn(
                name: "Versao",
                table: "Checklist");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "151ac418-833b-4969-81d9-5c1ee7c56025", null, "Admin", "ADMIN" },
                    { "712237f3-613a-4d13-a7d3-49f3143164ee", null, "User", "USER" }
                });
        }
    }
}
