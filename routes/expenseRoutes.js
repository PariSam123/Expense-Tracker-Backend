const express = require("express");

const expenseController = require("../controller/expenseController.js");
const router = express.Router();

router.post(`/addExpenses`, expenseController.addExpenses);
router.patch(`/updateExpense/:id`, expenseController.updateExpense);
router.delete(`/deleteExpense/:id`, expenseController.deleteExpense);

module.exports = router;