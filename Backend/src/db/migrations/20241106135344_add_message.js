export const up = async (knex) => {
  await knex.schema.createTable("message", (table) => {
    table.increments("id")
    table.text("content").notNullable()
    table.date("send_at").notNullable()
    table.integer("sender_id").unsigned()
    table.integer("receipt_id").unsigned()
    table
      .foreign("sender_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table
      .foreign("receipt_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("message")
}
