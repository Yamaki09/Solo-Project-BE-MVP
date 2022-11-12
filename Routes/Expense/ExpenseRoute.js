const express = require("express");
const router = express.Router();
const ExpenseController = require("../../Controllers/Expense/ExpenseController");

router.get("/:userid", ExpenseController.getUserExpense);
router.post("/new", ExpenseController.postUserExpense);

module.exports = router;
