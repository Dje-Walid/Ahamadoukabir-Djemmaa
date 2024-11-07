export const up = async (knex) => {
  await knex.schema.createTable("detailParty", (table) => {
    table.increments("id")
    table.text("gameName").notNullable()
    table.integer("numberOfPlace").notNullable()
    table.text("platform").notNullable()
    table.integer("party_id").unsigned()
    table
      .foreign("party_id")
      .references("id")
      .inTable("party")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("detailParty")
}
