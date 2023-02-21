const knex = require("../../db/knex");
const { ERRORS } = require("../../Configs/Constants");
require("dotenv").config();

const IncomeController = {
	getUserIncome: async (req, res) => {
		try {
			const { userid } = req.params;
			const data = await knex("income")
				.select({
					id: "id",
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
	postUserIncome: async (req, res) => {
		try {
			const { userid } = req.params;
			const { name, value } = req.body;
			const newInput = {
				name: name,
				value: value,
				income_id: userid,
			};
			const data = await knex("income")
				.returning(["*"])
				.insert(newInput)
				.where({ income_id: userid });
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
		}
	},
	putUserIncome: async (req, res) => {
		try {
			const { userid, incomeid: id } = req.params;
			const { name, value } = req.body;
			console.log("this is put income", name, value);

			const data = await knex("income")
				.returning(["*"])
				.update({ name: name, value: value })
				.where({ income_id: userid, id: id });
			console.log("this is put new data", data);
			res.status(200).json(data);
		} catch (error) {
			console.log(error);
		}
	},
};

module.exports = IncomeController;
