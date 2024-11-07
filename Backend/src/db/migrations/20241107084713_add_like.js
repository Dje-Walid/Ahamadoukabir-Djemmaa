export const up = async (knex) => {
  await knex.schema.createTable("like", (table) => {
    table.integer("centerofinterest_id").unsigned()
    table.integer("user_id").unsigned()
    table.primary(["centerofinterest_id", "user_id"])
    table
      .foreign("centerofinterest_id")
      .references("id")
      .inTable("centerofinterest")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("like")
}
