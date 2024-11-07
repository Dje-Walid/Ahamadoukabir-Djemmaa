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
      .integer("typeofparty_id")
      .unsigned()
      .references("id")
      .inTable("typeofparty")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.table("party", (table) => {
    table.dropColumn("arrange_id")
    table.dropColumn("typeofparty_id")
  })
}
