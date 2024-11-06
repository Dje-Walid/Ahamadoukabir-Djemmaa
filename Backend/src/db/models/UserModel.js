import BaseModel from "./BaseModel.js"

class UserModel extends BaseModel {
  static get tableName() {
    return "users"
  }
}

export default UserModel
