import BaseModel from "./BaseModel.js"
import UserModel from "./UserModel.js"

class CommentModel extends BaseModel {
  static get tableName() {
    return "comment"
  }
  static get relationMappings() {
    return {
      author: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "comment.author_id",
          to: "users.id",
        },
      },
      consignee: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "comment.consignee_id",
          to: "users.id",
        },
      },
    }
  }
}

export default CommentModel
