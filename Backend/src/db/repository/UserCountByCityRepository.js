/* eslint-disable class-methods-use-this */
import UserCountByCity from "../models/UserCountByCityModel.js"

class UserCountByCityRepository {
  // Create a new user
  async refreshMaterializedView() {
    try {
      await UserCountByCity.raw("REFRESH MATERIALIZED VIEW user_count_by_city")
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Erreur lors du rafraîchissement :", err)
    }
  }
}

export default new UserCountByCityRepository()
