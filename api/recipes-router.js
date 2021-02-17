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

router.get("/:id/shopping_list", async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipes.getShoppingList(id);
  if (!recipe) {
    res.status(404).json({ message: "Could not find recipe by the Id" });
  } else {
    try {
      res.status(200).json(recipe);
    } catch (err) {
      res.status(500).json({ message: "server error" });
    }
  }
});

router.get("/ingredients/:id/recipe", async (req, res) => {
  const { id } = req.params;
  const ingredient = await Recipes.getIngredients(id);
  if (!ingredient) {
    res.status(404).json({ message: "there's not an ingredient by that Id" });
  } else {
    try {
      res.status(200).json(ingredient);
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  }
});

module.exports = router;
