const express = require("express");
const router = express.Router();
const { Blog } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    res.json(blog);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    await blog.update(req.body);
    await blog.save();
    res.send(blog);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    await blog.destroy();
    res.json(blog);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
