export const up = async (knex) => {
  await knex.schema.createTable("affinity", (table) => {
    table.integer("party_id").unsigned()
    table.integer("center_of_interest_id").unsigned()
    table.primary(["party_id", "center_of_interest_id"])
    table
      .foreign("party_id")
      .references("id")
      .inTable("party")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table
      .foreign("center_of_interest_id")
      .references("id")
      .inTable("center_of_interest")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("affinity")
}
