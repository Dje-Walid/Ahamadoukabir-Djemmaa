export const up = async (knex) => {
  await knex.schema.createTable("party", (table) => {
    table.increments("id")
    table.date("beginDate").notNullable()
    table.date("endnDate").notNullable()
    table.text("numberOfPlace").notNullable()
    table.boolean("isPaying").notNullable()
    table.boolean("bringAppetizer").notNullable()
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
