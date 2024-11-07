export const up = async (knex) => {
  await knex.schema.createTable("bringgame", (table) => {
    table.integer("party_id").unsigned()
    table.integer("user_id").unsigned()
    table.text("name").notNullable()
    table.primary(["party_id", "user_id"])
    table
      .foreign("party_id")
      .references("id")
      .inTable("party")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("bringgame")
}
