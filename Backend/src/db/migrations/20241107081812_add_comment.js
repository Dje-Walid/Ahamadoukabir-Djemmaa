export const up = async (knex) => {
  await knex.schema.createTable("comment", (table) => {
    table.increments("id")
    table.text("comment").notNullable()
    table.date("publish_at").notNullable()
    table.integer("author_id").unsigned()
    table.integer("consignee_id").unsigned()
    table
      .foreign("author_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table
      .foreign("consignee_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("comment")
}
