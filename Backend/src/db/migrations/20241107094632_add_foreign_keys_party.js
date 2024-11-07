export const up = async (knex) => {
  await knex.schema.table("party", (table) => {
    table
      .integer("arrange_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table
      .integer("type_of_party_id")
      .unsigned()
      .references("id")
      .inTable("type_of_party")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.table("party", (table) => {
    table.dropColumn("arrange_id")
    table.dropColumn("type_of_party_id")
  })
}
