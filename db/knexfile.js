require("dotenv").config({
	path: "../.env",
});

module.exports = {
	development: {
		client: "postgresql",
		connection: {
			database: process.env.DB_NAME || "nin_money",
			user: process.env.DB_USER || "postgres",
			password: process.env.DB_PASSWORD,
		},
		migrations: {
			directory: "./migrations",
		},
		seeds: {
			directory: "./seeds",
		},
	},

	production: {
		client: "postgresql",
		connection: process.env.DB_URL,
		migrations: {
			directory: "./migrations",
		},
		seeds: {
			directory: "./seeds",
		},
	},
};
