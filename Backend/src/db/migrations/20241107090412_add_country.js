export const up = async (knex) => {
  await knex.schema.createTable("country", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.string("code", 3).notNullable()
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("country")
}
