const knex = require("../../db/knex");
const { ERRORS } = require("../../Configs/Constants");
require("dotenv").config();

const IncomeController = {
	getUserIncome: async (req, res) => {
		try {
			const { userid } = req.params;
			const data = await knex("income")
				.select({
					name: "name",
					value: "value",
				})
				.where({ income_id: userid });
			console.log(data);
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
		}
	},
	// CONTINUE HERE
	postUserIncome: async (req, res) => {
		try {
			const userid = "1";
			const { name, value } = req.body;
			console.log("this is post income", name, value);
			const newInput = {
				name: name,
				value: value,
				income_id: userid,
			};
			const data = await knex("income").returning(["*"]).insert(newInput);
			console.log("this is the new income input", data);
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
		}
	},
	putUserIncome: async (req, res) => {
		try {
			const { userid } = req.params;
			const { name, value } = req.body;
			console.log("this is put income", name, value);
		} catch (error) {
			console.log(error);
		}
	},
};

module.exports = IncomeController;
