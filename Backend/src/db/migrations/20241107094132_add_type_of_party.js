export const up = async (knex) => {
  await knex.schema.createTable("type_of_party", (table) => {
    table.increments("id")
    table
      .enum("name", ["Jeux de société", "Jeux vidéo", "Classique"])
      .notNullable()
  })
}

export const down = async (knex) => {
  await knex.schema.dropTable("type_of_party")
}
