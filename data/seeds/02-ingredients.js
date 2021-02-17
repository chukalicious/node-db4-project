exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          id: 1,
          ingredient_name: "flour",
          quantity: 5,
          recipe_id: 1,
          unit: "oz",
        },
        {
          id: 2,
          ingredient_name: "onions",
          quantity: 1,
          recipe_id: 2,
          unit: "onion",
        },
        {
          id: 3,
          ingredient_name: "tomato sauce",
          quantity: 0.5,
          recipe_id: 3,
          unit: "cup",
        },
        {
          id: 4,
          ingredient_name: "cheese",
          quantity: 0.5,
          recipe_id: 1,
          unit: "cup",
        },
        {
          id: 5,
          ingredient_name: "cheese",
          quantity: 0.5,
          recipe_id: 3,
          unit: "cup",
        },
      ]);
    });
};
