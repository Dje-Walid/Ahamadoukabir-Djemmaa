export const up = async (knex) => {
  await knex.schema.createTable("affinity", (table) => {
    table.integer("party_id").unsigned()
    table.integer("centerofinterest_id").unsigned()
    table.primary(["party_id", "centerofinterest_id"])
    table
      .foreign("party_id")
      .references("id")
      .inTable("party")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table
      .foreign("centerofinterest_id")
      .references("id")
      .inTable("centerofinterest")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("affinity")
}
