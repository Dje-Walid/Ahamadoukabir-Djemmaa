import BaseModel from "./BaseModel.js"
import PartyModel from "./PartyModel.js"

class TypeParty extends BaseModel {
  static get tableName() {
    return "typeofparty"
  }
  static get relationMappings() {
    return {
      typeparty: {
        relation: BaseModel.HasManyRelation,
        modelClass: PartyModel,
        join: {
          from: "typeparty.id",
          to: "party.type_of_party_id",
        },
      },
    }
  }
}

export default TypeParty
