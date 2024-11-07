/* eslint-disable max-lines-per-function */
import AddressModel from "./AddressModel.js"
import BaseModel from "./BaseModel.js"
import CenterOfInerestModel from "./CenterOfInterestModel.js"
import CommentModel from "./CommentModel.js"
import MarkModel from "./MarkModel.js"
import MessageModel from "./MessageModel.js"
import PartyModel from "./PartyModel.js"

class UserModel extends BaseModel {
  static get tableName() {
    return "users"
  }

  static get relationMappings() {
    return {
      sentMessages: {
        relation: BaseModel.HasManyRelation,
        modelClass: MessageModel,
        join: {
          from: "users.id",
          to: "messages.sender_id",
        },
      },
      receivedMessages: {
        relation: BaseModel.HasManyRelation,
        modelClass: MessageModel,
        join: {
          from: "users.id",
          to: "messages.receipt_id",
        },
      },
      evaluateMarks: {
        relation: BaseModel.HasManyRelation,
        modelClass: MarkModel,
        join: {
          from: "users.id",
          to: "mark.evaluate_id",
        },
      },
      notedMarks: {
        relation: BaseModel.HasManyRelation,
        modelClass: MessageModel,
        join: {
          from: "users.id",
          to: "mark.noted_id",
        },
      },
      authorComments: {
        relation: BaseModel.HasManyRelation,
        modelClass: CommentModel,
        join: {
          from: "users.id",
          to: "comment.author_id",
        },
      },
      consigneeComments: {
        relation: BaseModel.HasManyRelation,
        modelClass: CommentModel,
        join: {
          from: "users.id",
          to: "comment.consignee_id",
        },
      },
      arrangeParty: {
        relation: BaseModel.HasManyRelation,
        modelClass: PartyModel,
        join: {
          from: "users.id",
          to: "party.arrange_id",
        },
      },
      locationAddress: {
        relation: BaseModel.HasOneRelation,
        modelClass: AddressModel,
        join: {
          from: "users.id",
          to: "address.address_id",
        },
      },
      likes: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: CenterOfInerestModel,
        join: {
          from: "users.id",
          through: {
            from: "like.user_id",
            to: "like.centerofinterest_id",
          },
          to: "centerofinterest.id",
        },
      },
      parties: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: PartyModel,
        join: {
          from: "users.id",
          through: {
            from: "enrollment.user_id",
            to: "enrollment.party_id",
          },
          to: "party.id",
        },
      },
      BringAgamesUsers: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: PartyModel,
        join: {
          from: "user.id",
          through: {
            from: "bringgame.user_id",
            to: "bringgame.party_id",
          },
          to: "party.id",
        },
      },
    }
  }
}

export default UserModel
