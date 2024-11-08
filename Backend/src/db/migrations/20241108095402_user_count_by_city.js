export const up = async (knex) => {
    // Créer la vue matérialisée
    await knex.raw(`
      CREATE MATERIALIZED VIEW user_count_by_city AS
      SELECT
        address.city,
        COUNT(users.id) AS user_count
      FROM users
      JOIN address ON users.address_id = address.id
      GROUP BY address.city;
    `)
}

export const down = async (knex) => {
    // Supprimer la vue matérialisée
    await knex.raw("DROP MATERIALIZED VIEW IF EXISTS user_count_by_city")
}
