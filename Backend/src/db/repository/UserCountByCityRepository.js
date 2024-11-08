import UserCountByCityModel from "../models/UserCountByCityModel.js"

class UserCountByCityRepository {
  // Create a new user
  async refreshMaterializedView() {
    try {
      const query = `REFRESH MATERIALIZED VIEW user_count_by_city`

      await UserCountByCityModel.knex().raw(query)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Erreur lors du rafraîchissement :", err)
    }
  }

  async getUserCountByCity(page = 1, limit = 10) {
    const offset = (page - 1) * limit

    const query = `SELECT u.city, u.user_count
      FROM user_count_by_city u 
      LIMIT ? OFFSET ? `

    const userCountByCity = await UserCountByCityModel.knex().raw(query, [limit, offset])

    return UserCountByCityModel.fromDatabaseJson(userCountByCity.rows)
  }
}

export default new UserCountByCityRepository()
