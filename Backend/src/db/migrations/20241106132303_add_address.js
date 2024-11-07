export const up = async (knex) => {
  await knex.schema.createTable("address", (table) => {
    table.increments("id")
    table.text("number").notNullable()
    table.text("street").notNullable()
    table.text("city").notNullable()
    table.text("zip_code").notNullable()
    table.string("country_code", 3).notNullable()
    table.text("addtional")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("address")
}
