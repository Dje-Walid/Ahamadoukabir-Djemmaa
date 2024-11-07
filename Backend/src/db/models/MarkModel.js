import BaseModel from "./BaseModel.js"
import UserModel from "./UserModel.js"

class MarkModel extends BaseModel {
  static get tableName() {
    return "mark"
  }
  static get relationMappings() {
    return {
      evaluate: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "mark.evaluate_id",
          to: "users.id",
        },
      },
      noted: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "mark.noted_id",
          to: "users.id",
        },
      },
    }
  }
}

export default MarkModel
