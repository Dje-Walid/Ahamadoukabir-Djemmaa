export const up = async (knex) => {
  await knex.schema.createTable("party", (table) => {
    table.increments("id")
    table.date("begin_date").notNullable()
    table.date("end_date").notNullable()
    table.text("number_of_place").notNullable()
    table.boolean("is_paying").notNullable()
    table.boolean("bring_appetizer").notNullable()
    table.integer("address_id").unsigned()
    table
      .foreign("address_id")
      .references("id")
      .inTable("address")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("party")
}
