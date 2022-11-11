/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("expense").del();
	await knex("expense").insert([
		{ name: "weekly grocery", value: 5000, expense_id: 1 },
		{ name: "weekly grocery", value: 10000, expense_id: 2 },
		{ name: "restocking supplies", value: 10000, expense_id: 3 },
		{ name: "phone bill", value: 3000, expense_id: 1 },
		{ name: "electricity bill", value: 2500, expense_id: 1 },
		{ name: "transportation", value: 1500, expense_id: 1 },
	]);
};
