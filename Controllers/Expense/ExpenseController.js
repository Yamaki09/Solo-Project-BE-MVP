const knex = require("../../db/knex");
const { ERRORS } = require("../../Configs/Constants");
require("dotenv").config();

const ExpenseController = {
	getUserExpense: async (req, res) => {
		try {
			const { userid } = req.params;
			const data = await knex("expense")
				.select({
					id: "id",
					name: "name",
					value: "value",
				})
				.where({ expense_id: userid });
			console.log(data);
			res.status(200).json(data);
		} catch (error) {
			console.log("this is get expense error", error);
		}
	},
	postUserExpense: async (req, res) => {
		try {
			const { userid } = req.params;
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
			const { userid, expenseid: id } = req.params;
			const { name, value } = req.body;
			console.log("this is put expense", name, value);
			console.log("this is put expense id", id);

			const data = await knex("expense")
				.returning(["*"])
				.update({ name: name, value: value })
				.where({ expense_id: userid, id: id });
			console.log("this is put new data", data);
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
		}
	},
};

module.exports = ExpenseController;
