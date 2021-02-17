exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.text("recipe_title", 128).unique().notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("id");
      tbl.text("ingredient_name", 128).notNullable();
      tbl.float("quantity");
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
