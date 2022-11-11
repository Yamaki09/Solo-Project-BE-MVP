/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("expense", function (table) {
		table.increments("id").unsigned().primary();
		table.string("name", 50);
		table.integer("value", 50);
		table.integer("expense_id").references("id").inTable("user");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("expense");
};
