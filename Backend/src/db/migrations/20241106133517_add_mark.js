export const up = async (knex) => {
  await knex.schema.createTable("mark", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.date("publishedAt").notNullable()
    table.integer("evaluate_id").unsigned()
    table.integer("noted_id").unsigned()
    table
      .foreign("evaluate_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table
      .foreign("noted_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("mark")
}
