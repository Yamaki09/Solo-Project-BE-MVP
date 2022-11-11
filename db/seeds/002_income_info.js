/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("income").del();
	await knex("income").insert([
		{ name: "Salary", value: 100000, income_id: 1 },
		{ name: "Salary", value: 1000000, income_id: 2 },
		{ name: "Sales", value: 100000, income_id: 3 },
		{ name: "Part-Time", value: 20000, income_id: 1 },
	]);
};
