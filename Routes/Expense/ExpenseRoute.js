const express = require("express");
const router = express.Router();
const ExpenseController = require("../../Controllers/Expense/ExpenseController");

router.get("/:userid", ExpenseController.getUserExpense);
router.post("/new/:userid", ExpenseController.postUserExpense);
router.put("/edit/:userid/:expenseid", ExpenseController.putUserExpense);

module.exports = router;
