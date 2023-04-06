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
    const author = await Author.create(req.body);
    res.json(author);
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
    const author = await Author.destroy()
    res.json(author)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
