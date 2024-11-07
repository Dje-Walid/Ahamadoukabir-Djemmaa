import BaseModel from "./BaseModel.js"
import PartyModel from "./PartyModel.js"
import UserModel from "./UserModel.js"

class CenterOfInerestModel extends BaseModel {
  static get tableName() {
    return "center_of_interest"
  }
  static get relationMappings() {
    return {
      users: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: "center_of_interest.id",
          through: {
            from: "like.center_of_interest_id",
            to: "like.user_id",
          },
          to: "users.id",
        },
      },
      affnities: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: PartyModel,
        join: {
          from: "center_of_interest.id",
          through: {
            from: "affinity.center_of_interest_id",
            to: "affinity.party_id",
          },
          to: "party.id",
        },
      },
    }
  }
}

export default CenterOfInerestModel
