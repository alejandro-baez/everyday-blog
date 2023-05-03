const router = require("express").Router();
const { Author } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const author = await Author.findByPk(req.params.id);
    res.json(author);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const validUsername = await Author.findOne({
      where: { username: req.body.username },
    });

    const validEmail = await Author.findOne({
      where: { email: req.body.email },
    });
    if (validUsername || validEmail) {
      console.log("Username or password already being used console log");
      res.send("Username already being used res.send");
    } else {
      const author = await Author.create(req.body);
      res.json(author);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const author = await Author.findByPk(req.params.id);
    await author.update(req.body);
    await author.save();
    res.json(author);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const author = await Author.destroy();
    res.json(author);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
