/* eslint-disable max-lines-per-function */
import BaseModel from "./BaseModel.js"
import detailPartyModel from "./DetailPartyModel.js"
import UserModel from "./UserModel.js"

class PartyModel extends BaseModel {
  static get tableName() {
    return "party"
  }

  static get relationMappings() {
    return {
      arrange: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "party.arrange_id",
          to: "users.id",
        },
      },
      users: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: "party.id",
          through: {
            from: "enrollment.party_id",
            to: "enrollment.user_id",
          },
          to: "users.id",
        },
      },
      AffinitiesParty: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: PartyModel,
        join: {
          from: "party.id",
          through: {
            from: "affinity.party_id",
            to: "affinity.center_of_interest_id",
          },
          to: "center_of_interest.id",
        },
      },
      BringAgames: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: "party.id",
          through: {
            from: "bring_game.party_id",
            to: "bring_game.user_id",
          },
          to: "user.id",
        },
      },
      address: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "party.address_id",
          to: "address.id",
        },
      },
      typeparty: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: "party.type_of_party_id",
          to: "type_of_party.id",
        },
      },
      detailParties: {
        relation: BaseModel.HasManyRelation,
        modelClass: detailPartyModel,
        join: {
          from: "party.id",
          to: "detail_party.party_id",
        },
      },
    }
  }
}

export default PartyModel
