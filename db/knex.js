require("dotenv").config();

const env = process.env.DB_URL ? "production" : "development";

const config = require("./knexfile");
const knex = require("knex")(config[env]);

module.exports = knex;
