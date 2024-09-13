using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class ChecklistOneToOne2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Checklist_AspNetUsers_AppUserId",
                table: "Checklist");

            migrationBuilder.DropIndex(
                name: "IX_Checklist_AppUserId",
                table: "Checklist");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "04e2c28d-668c-4397-8a2c-30e11adf18ff");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8a747728-e0d8-46fd-a441-430a32a2762e");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Checklist");

            migrationBuilder.AddColumn<string>(
                name: "AppUserCordId",
                table: "Checklist",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AppUserExecId",
                table: "Checklist",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AppUserIdCord",
                table: "Checklist",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "AppUserIdExec",
                table: "Checklist",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "72f28620-0cb6-4de2-a743-059de33cf0c4", null, "User", "USER" },
                    { "bd0f3d5e-9ae6-4871-87f8-2cf32d5d31e0", null, "Admin", "ADMIN" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Checklist_AppUserCordId",
                table: "Checklist",
                column: "AppUserCordId");

            migrationBuilder.CreateIndex(
                name: "IX_Checklist_AppUserExecId",
                table: "Checklist",
                column: "AppUserExecId");

            migrationBuilder.AddForeignKey(
                name: "FK_Checklist_AspNetUsers_AppUserCordId",
                table: "Checklist",
                column: "AppUserCordId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Checklist_AspNetUsers_AppUserExecId",
                table: "Checklist",
                column: "AppUserExecId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Checklist_AspNetUsers_AppUserCordId",
                table: "Checklist");

            migrationBuilder.DropForeignKey(
                name: "FK_Checklist_AspNetUsers_AppUserExecId",
                table: "Checklist");

            migrationBuilder.DropIndex(
                name: "IX_Checklist_AppUserCordId",
                table: "Checklist");

            migrationBuilder.DropIndex(
                name: "IX_Checklist_AppUserExecId",
                table: "Checklist");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "72f28620-0cb6-4de2-a743-059de33cf0c4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bd0f3d5e-9ae6-4871-87f8-2cf32d5d31e0");

            migrationBuilder.DropColumn(
                name: "AppUserCordId",
                table: "Checklist");

            migrationBuilder.DropColumn(
                name: "AppUserExecId",
                table: "Checklist");

            migrationBuilder.DropColumn(
                name: "AppUserIdCord",
                table: "Checklist");

            migrationBuilder.DropColumn(
                name: "AppUserIdExec",
                table: "Checklist");

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "Checklist",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "04e2c28d-668c-4397-8a2c-30e11adf18ff", null, "Admin", "ADMIN" },
                    { "8a747728-e0d8-46fd-a441-430a32a2762e", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Checklist_AppUserId",
                table: "Checklist",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Checklist_AspNetUsers_AppUserId",
                table: "Checklist",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
