const e = require("connect-timeout");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("user", function (table) {
		table.increments("id").unsigned().primary();
		table.string("firstName", 50);
		table.string("lastName", 50);
		table.string("email", 255).unique();
		table.string("password", 25);
		table.string("password2", 25);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("user");
};
