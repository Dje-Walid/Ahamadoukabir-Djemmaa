export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.text("lastname").notNullable()
    table.text("email").notNullable().unique()
    table.text("address").notNullable()
    table.text("city").notNullable()
    table.text("zipNumber").notNullable()
    table.text("passwordHash")
    table.text("passwordSalt")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("users")
}
