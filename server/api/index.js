//central hub for all routes

const router = require("express").Router();

router.use("/blogs", require("./blog"));
router.use("/authors", require("./author"));

//creating 404 error middleware
router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
