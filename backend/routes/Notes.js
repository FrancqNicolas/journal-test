const express = require("express");
const router = express.Router();
const Note = require("../models/notes")

router.get("/", async (req, res) => {
  const todos = await Note.find();
  res.json(todos);
});

router.get("/:id", async (req, res) => {
    const todo = await Note.findById({
      _id: req.params.id,
    });
  
    res.json(todo);
  });

router.post("/add", async (req, res) => {
    const todo = new Note({
        title: req.body.title,
        publishedDate: req.body.publishedDate,
        content: req.body.content
    });

    const result = await todo.save();
    res.json(result);
})

module.exports = router;