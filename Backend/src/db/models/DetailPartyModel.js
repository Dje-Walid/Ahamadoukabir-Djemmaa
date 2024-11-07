import AddressModel from "./AddressModel.js"
import BaseModel from "./BaseModel.js"

class detailPartyModel extends BaseModel {
  static get tableName() {
    return "detailParty"
  }
  static get relationMappings() {
    return {
      detailParties: {
        relation: BaseModel.HasManyRelation,
        modelClass: AddressModel,
        join: {
          from: "detailParty.id",
          to: "party.detailParty_id",
        },
      },
    }
  }
}

export default detailPartyModel
