export const up = async (knex) => {
  await knex.schema.createTable("like", (table) => {
    table.integer("center_of_interest_id").unsigned()
    table.integer("user_id").unsigned()
    table.primary(["center_of_interest_id", "user_id"])
    table
      .foreign("center_of_interest_id")
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
