//hookup sequelize
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://localhost:5432/blogs", {
  logging: false,
});

module.exports = sequelize;
