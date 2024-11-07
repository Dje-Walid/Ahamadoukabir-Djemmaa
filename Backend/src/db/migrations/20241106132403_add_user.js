export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id")
    table.text("name").notNullable()
    table.text("lastname").notNullable()
    table.text("email").notNullable().unique()
    table.text("password_hash")
    table.text("password_salt")
    table
    .integer("address_id")
    .unsigned()
    .references("id")
    .inTable("address")
    .onDelete("CASCADE")
    .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("users")
}
