const express = require("express");
const router = express.Router();
const IncomeController = require("../../Controllers/Income/IncomeController");

router.get("/:userid", IncomeController.getUserIncome);
router.post("/new", IncomeController.postUserIncome);
router.put("/edit/:userid/:incomeid", IncomeController.putUserIncome);

module.exports = router;
