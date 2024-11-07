export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.text("lastname").notNullable()
    table.text("email").notNullable().unique()
    table.text("address").notNullable()
    table.text("city").notNullable()
    table.text("zip_number").notNullable()
    table.text("password_hash")
    table.text("password_salt")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("users")
}
