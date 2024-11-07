import BaseModel from "./BaseModel.js"
import UserModel from "./UserModel.js"

class MessageModel extends BaseModel {
  static get tableName() {
    return "message"
  }
  static get relationMappings() {
    return {
      sender: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "messages.sender_id",
          to: "users.id",
        },
      },
      receiver: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "messages.receipt_id",
          to: "users.id",
        },
      },
    }
  }
}

export default MessageModel
