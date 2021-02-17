const express = require("express");

const router = express.Router();

const Recipes = require("./recipes-model");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.get();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

// router.post(){}

module.exports = router;
