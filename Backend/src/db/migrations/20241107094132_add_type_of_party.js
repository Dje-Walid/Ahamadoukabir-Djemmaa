export const up = async (knex) => {
  await knex.schema.createTable("typeofparty", (table) => {
    table.increments("id")
    table
      .enum("name", ["Jeux de société", "Jeux vidéo", "Classique"])
      .notNullable()
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("typeofparty")
}
