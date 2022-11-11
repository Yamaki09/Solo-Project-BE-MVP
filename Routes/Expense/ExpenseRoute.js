const express = require("express");
const router = express.Router();
const ExpenseController = require("../../Controllers/Expense/ExpenseController");

router.get("/:userid", ExpenseController.getUserExpense);

module.exports = router;
