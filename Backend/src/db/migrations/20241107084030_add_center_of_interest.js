export const up = async (knex) => {
  await knex.schema.createTable("centerofinterest", (table) => {
    table.increments("id")
    table.text("name").notNullable()
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("centerofinterest")
}
