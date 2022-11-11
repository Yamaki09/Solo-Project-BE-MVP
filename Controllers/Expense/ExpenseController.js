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
			console.log(error);
		}
	},
	// CONTINUE HERE
	putUserExpense: async (req, res) => {
		try {
			const { userid } = req.params;
			const { name, value } = req.body;
			console.log("this is put Expense", name, value);
		} catch (error) {
			console.log(error);
		}
	},
	postUserExpense: async (req, res) => {
		try {
			const { name, value, income_id } = req.body;
			console.log("this is post Expense", name, value, income_id);
		} catch (error) {
			console.log(error);
		}
	},
};

module.exports = ExpenseController;
