import { Model } from "objection"

export default class UserCountByCity extends Model {
  static get tableName() {
    return "user_count_by_city"
  }

  static get idColumn() {
    return "city"
  }
}
