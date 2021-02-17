const knex = require("knex");
const config = require("../knexfile");

const db = knex(config.development);

module.exports = {
  get,
  findRecipeById,
  getShoppingList,
  getIngredients,
};

function get() {
  return db("recipes");
}

function getIngredients(ingredientId) {
  return db("ingredients as i")
    .join("recipes as r", "i.recipe_id", "r.id")
    .where("i.id", ingredientId)
    .select(
      "i.ingredient_name",
      "i.id as ingredientId",
      "r.id as recipe it belongs to",
      "r.recipe_title"
    );
}

//GET /api/recipes/:id/shoppingList: a list of
//ingredients and quantites for a single recipe

function findRecipeById(id) {
  return db("recipes").where({ id }).first();
}

function getShoppingList(recipeId) {
  return db("recipes as r")
    .join("ingredients as i", "i.id", "r.id")
    .where("r.id", recipeId)
    .select("i.*", "r.recipe_title");
}

//GET /api/recipes/:id/instructions: a correctly ordered
//list of how to prepare a single recipe

//GET /api/ingredients/:id/recipes: all recipes
//in the system that utilize a single ingredient
