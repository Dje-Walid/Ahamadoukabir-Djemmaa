import AddressModel from "./AddressModel.js"
import BaseModel from "./BaseModel.js"

class CountryModel extends BaseModel {
  static get tableName() {
    return "country"
  }
  static get relationMappings() {
    return {
      locationAddress: {
        relation: BaseModel.HasManyRelation,
        modelClass: AddressModel,
        join: {
          from: "country.id",
          to: "address.country_id",
        },
      },
    }
  }
}

export default CountryModel
