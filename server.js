const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const incomeRoutes = require("./Routes/Income/IncomeRoutes");
const expenseRoutes = require("./Routes/Expense/ExpenseRoute");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/user/income", incomeRoutes);
app.use("/user/expense", expenseRoutes);

app.get("/test", (req, res) => res.send("hello"));

app.use((error, req, res, next) => {
	res.status(res.statusCode || 500);
	res.json({ message: error.message });
});

app.listen(PORT, () => {
	console.log(`Server is now listening to PORT ${PORT}`);
});
