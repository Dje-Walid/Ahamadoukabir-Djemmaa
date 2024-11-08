import BaseModel from "./BaseModel.js"

export default class UserCountByCityModel extends BaseModel {
  static get tableName() {
    return "user_count_by_city"
  }

  static get idColumn() {
    return "city"
  }
}
