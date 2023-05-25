const Sequelize = require("sequelize");
const sequelize = require('../utils/database.js');
const Expense = sequelize.define("Expenses", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = Expense;