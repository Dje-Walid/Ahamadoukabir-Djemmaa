export const up = async (knex) => {
  await knex.schema.table("users", (table) => {
    table
      .integer("address_id")
      .unsigned()
      .references("id")
      .inTable("address")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.dropColumn("address")
    table.dropColumn("city")
    table.dropColumn("zip_number")
  })
}

export const down = async (knex) => {
  await knex.schema.table("users", (table) => {
    table.dropColumn("address_id")
    table.text("address").notNullable()
    table.text("city").notNullable()
    table.text("zip_number").notNullable()
  })
}
