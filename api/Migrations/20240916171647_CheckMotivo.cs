using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class CheckMotivo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "72f28620-0cb6-4de2-a743-059de33cf0c4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bd0f3d5e-9ae6-4871-87f8-2cf32d5d31e0");

            migrationBuilder.AddColumn<string>(
                name: "Motivo",
                table: "Checks",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "151ac418-833b-4969-81d9-5c1ee7c56025", null, "Admin", "ADMIN" },
                    { "712237f3-613a-4d13-a7d3-49f3143164ee", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "151ac418-833b-4969-81d9-5c1ee7c56025");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "712237f3-613a-4d13-a7d3-49f3143164ee");

            migrationBuilder.DropColumn(
                name: "Motivo",
                table: "Checks");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "72f28620-0cb6-4de2-a743-059de33cf0c4", null, "User", "USER" },
                    { "bd0f3d5e-9ae6-4871-87f8-2cf32d5d31e0", null, "Admin", "ADMIN" }
                });
        }
    }
}
