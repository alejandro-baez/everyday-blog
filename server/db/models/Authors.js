const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 5;
//Author is doubling as user, only Authors can write blogs

const Author = sequelize.define("Author", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  image: {
    type: DataTypes.STRING,
    defaultValue:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Author;

//instance methods

Author.prototype.correctPassword = function (attemptedPwd) {
  return bcrypt.compare(attemptedPwd, this.password);
};

Author.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

//class methods

Author.authenticate = async function ({ username, password }) {
  const user = await Author.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status=401;
    throw error;
  }
  return user.generateToken();
};

Author.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = await Author.findByPk(id);
    if (!user) {
      throw "nooooo";
    }
    return user;
  } catch (ex) {
    console.log("ex", ex);
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

//hooks
const hashPassword = async (user) => {
  //returns a boolean .changed and is used for hooks
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

Author.beforeCreate(hashPassword);
Author.beforeUpdate(hashPassword);
Author.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
