export const up = async (knex) => {
  await knex.schema.createTable("center_of_interest", (table) => {
    table.increments("id")
    table.text("name").notNullable()
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("center_of_interest")
}
