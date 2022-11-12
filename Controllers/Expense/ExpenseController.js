const knex = require("../../db/knex");
const { ERRORS } = require("../../Configs/Constants");
require("dotenv").config();

const ExpenseController = {
	getUserExpense: async (req, res) => {
		try {
			const { userid } = req.params;
			const data = await knex
				.select({
					name: "name",
					value: "value",
				})
				.from("expense")
				.where({ expense_id: userid });
			console.log(data);
			res.status(200).json(data);
		} catch (error) {
			console.log("this is get expense error", error);
		}
	},
	// CONTINUE HERE
	postUserExpense: async (req, res) => {
		try {
			const userid = "1";
			const { name, value } = req.body;
			console.log("this is post expense", name, value);
			const newInput = {
				name: name,
				value: value,
				expense_id: userid,
			};
			const data = await knex("expense").returning(["*"]).insert(newInput);
			console.log("this is the new expense input", data);
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
		}
	},
	putUserExpense: async (req, res) => {
		try {
			const { name, value, income_id } = req.body;
			console.log("this is post Expense", name, value, income_id);
		} catch (error) {
			console.log(error);
		}
	},
};

module.exports = ExpenseController;
