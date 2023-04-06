//hookup sequelize
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize("postgres://localhost:5432/blogs")

module.exports = sequelize;