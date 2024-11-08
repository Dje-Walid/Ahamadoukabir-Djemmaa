/* eslint-disable class-methods-use-this */
import UserModel from "../models/UserModel.js"
import AddressModel from "../models/AddressModel.js"
import { pbkdf2Sync, randomBytes } from "node:crypto"

class UserRepository {
  async createUser(userData) {
    const {
      name,
      lastname,
      email,
      password,
      numberAddress,
      street,
      city,
      zipCode,
      countryCode,
    } = userData

    const queryAddress = `
      INSERT INTO ${AddressModel.tableName} (number, street, city, zip_code, country_code)
      VALUES (?, ?, ?, ?, ?)
      RETURNING *;
    `
    const newAddress = await AddressModel.knex().raw(queryAddress, [
      numberAddress,
      street,
      city,
      zipCode,
      countryCode
    ])

    const addressId = newAddress.rows[0].id

    const security = {
      saltlen: 32,
      iterations: 310000,
      keylen: 256,
      digest: "sha512",
    }

    const hashPassword = (
      password,
      salt = randomBytes(security.saltlen).toString("hex"),
    ) => [
      pbkdf2Sync(
        password,
        salt,
        security.iterations,
        security.keylen,
        security.digest,
      ).toString("hex"),
      salt,
    ]

    const [passwordHash, passwordSalt] = await hashPassword(password)

    const query = `
      INSERT INTO ${UserModel.tableName} (name, lastname, email, password_hash, password_salt, address_id)
      VALUES (?, ?, ?, ?, ?, ?)
      RETURNING *;
    `

    const newUser = await UserModel.knex().raw(query, [
      name,
      lastname,
      email,
      passwordHash,
      passwordSalt,
      addressId,
    ])

    return UserModel.fromDatabaseJson(newUser.rows[0])
  }

  async getUserById(userId) {
    const query = `SELECT u.id, u.name, u.lastname, u.email
      FROM users u 
      LEFT JOIN address a ON a.id = u.address_id 
      WHERE u.id = ? `

    const user = await UserModel.knex().raw(query, userId)

    return UserModel.fromDatabaseJson(user.rows)
  }

  async getAllUsers(page = 1, limit = 10) {
    const offset = (page - 1) * limit

    const query = `SELECT u.id, u.name, u.lastname, u.email
      FROM users u 
      LEFT JOIN address a ON a.id = u.address_id 
      LIMIT ? OFFSET ? `

    const users = await UserModel.knex().raw(query, [limit, offset])

    return UserModel.fromDatabaseJson(users.rows)
  }

  async updateUser(userId, userData) {
    return await UserModel.query().patchAndFetchById(userId, userData)
  }

  async deleteUser(userId) {
    return await User.query().deleteById(userId)
  }
}

export default new UserRepository()
