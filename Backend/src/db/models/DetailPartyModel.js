import BaseModel from "./BaseModel.js"
import PartyModel from "./PartyModel.js"

class DetailPartyModel extends BaseModel {
  static get tableName() {
    return "detail_party"
  }
  static get relationMappings() {
    return {
      detail: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: PartyModel,
        join: {
          from: "detail_party.id",
          to: "detail.id",
        },
      },
    }
  }
}

export default DetailPartyModel
