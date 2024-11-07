export const up = async (knex) => {
  await knex.schema
    .renameTable("centerofinterest", "center_of_interest")
    .renameTable("bringgame", "bring_game")
    .renameTable("detailParty", "detail_party")
    .renameTable("typeofparty", "type_of_party")
}

export const down = async (knex) => {
  await knex.schema
    .renameTable("center_of_interest", "centerofinterest")
    .renameTable("bring_game", "bringgame")
    .renameTable("detail_party", "detailParty")
    .renameTable("type_of_party", "typeofparty")
}
