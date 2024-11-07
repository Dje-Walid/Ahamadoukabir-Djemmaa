export const up = async (knex) => {
  await knex.schema.createTable("detail_party", (table) => {
    table.increments("id")
    table.text("game_name").notNullable()
    table.integer("number_of_place").notNullable()
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
  await knex.schema.dropTable("detail_party")
}
