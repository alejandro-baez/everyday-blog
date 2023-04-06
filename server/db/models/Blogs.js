const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Blog = sequelize.define("Blog", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  contents: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty:true,
    },
  },
  image: {
    type: DataTypes.STRING,
    defaultValue:
      "https://img.freepik.com/premium-photo/businessman-using-tech-devices-icons-thin-line-interface_117023-904.jpg",
  },
});

module.exports = Blog;
