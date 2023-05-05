const PORT = process.env.PORT || 3000;
const app = require("./app");
const { sequelize } = require("./db");
require("dotenv").config();

//adding {force:true} inside of sequelize.sync() drops the tables and recreates them
sequelize.sync().then(() => {
  console.log("db synced");
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
});

//what is left to create
// need to create the react front end
//a place to create blogs
//work on creating a log in and sign up
//securing routes (using token and bcrypt)
