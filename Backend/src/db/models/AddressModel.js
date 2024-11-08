import BaseModel from "./BaseModel.js"
import PartyModel from "./PartyModel.js"
import UserModel from "./UserModel.js"

class AddressModel extends BaseModel {
  static get tableName() {
    return "address"
  }
  static get relationMappings() {
    return {
      residences: {
        relation: BaseModel.HasManyRelation,
        modelClass: UserModel,
        join: {
          from: "address.id",
          to: "user.address_id",
        },
      },
      location: {
        relation: BaseModel.HasManyRelation,
        modelClass: PartyModel,
        join: {
          from: "address.id",
          to: "party.address_id",
        },
      },
    }
  }
}

export default AddressModel
