export const up = async (knex) => {
  await knex.schema.createTable("address", (table) => {
    table.increments("id")
    table.text("number").notNullable()
    table.text("street").notNullable()
    table.text("city").notNullable()
    table.text("zipCode").notNullable()
    table.text("addtional")
    table.integer("country_id").unsigned()
    table
      .foreign("country_id")
      .references("id")
      .inTable("country")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("address")
}
