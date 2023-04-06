//central hub for all module exports and associations
const sequelize = require("./database");

const Blog = require("./models/Blogs");
const Author = require("./models/Authors");

Author.hasMany(Blog);
Blog.belongsTo(Author);

module.exports = {
  sequelize,
  Blog,
  Author,
};
