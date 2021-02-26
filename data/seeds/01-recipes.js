exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, recipe_title: "Cheesecake" },
        { id: 2, recipe_title: "Pork Roast" },
        { id: 3, recipe_title: "Lasagna" },
      ]);
    });
};
