import BaseModel from "./BaseModel.js"
import PartyModel from "./PartyModel.js"
import UserModel from "./UserModel.js"

class CenterOfInerestModel extends BaseModel {
  static get tableName() {
    return "centerofinterest"
  }
  static get relationMappings() {
    return {
      users: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: "centerofinterest.id",
          through: {
            from: "like.centerofinterest_id",
            to: "like.user_id",
          },
          to: "users.id",
        },
      },
      affnities: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: PartyModel,
        join: {
          from: "centerofinterest.id",
          through: {
            from: "affinity.centerofinterest_id",
            to: "affinity.party_id",
          },
          to: "party.id",
        },
      },
    }
  }
}

export default CenterOfInerestModel
