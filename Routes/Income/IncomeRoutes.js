const express = require("express");
const router = express.Router();
const IncomeController = require("../../Controllers/Income/IncomeController");

router.get("/:userid", IncomeController.getUserIncome);

module.exports = router;
