/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("user").del();
	await knex("user").insert([
		{
			firstName: "Koji",
			lastName: "Yamashita",
			email: "abc@123.com",
			password: "money",
		},
		{
			firstName: "Rocky",
			lastName: "Smith",
			email: "rockysmith@abc.com",
			password: "champion",
		},
		{
			firstName: "Yuna",
			lastName: "Yamane",
			email: "yuna@123.com",
			password: "coding",
		},
	]);
};
