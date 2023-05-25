const Expense = require("../model/expenseModel.js");

exports.addExpenses = async (req, res) => {
    const { description, amount, category } = req.body

    const expense = await Expense.create({
        description: description,
        amount: amount,
        category: category
    })
    if(expense)
        return res.status(200).send("Expense added successfully")
    res.status(400).send("Error while adding expenses");
}
exports.deleteExpense = async (req, res) => {
    const id = req.params.id
    await Expense.destroy({
        where: {
            id: id
        }
    })
    res.status(200).send("delete Expense Successfully")
}

exports.updateExpense = async (req, res) => {
    const id = req.params.id
    const { description, amount, category } = req.body
    const updatedExpense = await Expense.update({
        description: description,
        amount: amount,
        category: category
    },{
        where: {
            id: id
        }
    })
    if(updatedExpense)
        return res.status(200).send("update Expense Successfully")
    res.status(400).send("Error while updating expenses");
}
