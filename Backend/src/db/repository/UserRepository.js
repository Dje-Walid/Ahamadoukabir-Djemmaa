/* eslint-disable class-methods-use-this */
import { FORMERR } from "dns"
import UserModel from "../models/UserModel.js"

class UserRepository {

  async createUser(userData) {
    const { name, lastname, email, password } = userData

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
      INSERT INTO ${UserModel.tableName} (name, lastname, email, password_hash, password_salt)
      VALUES (?, ?, ?, ?, ?)
      RETURNING *;
    `
    const [newUser] = await UserModel.knex.raw(query, [name, lastname, email, passwordHash, passwordSalt])
    return newUser
  }

  async getUserById(userId) {
    const query = `SELECT u.id, u.name, u.lastname, u.email
      FROM users u 
      LEFT JOIN address a ON a.id = u.address_id 
      WHERE u.id = ? `

    const user = await UserModel.knex().raw(query, userId)

    return UserModel.fromDatabaseJson(user.rows[0])
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
