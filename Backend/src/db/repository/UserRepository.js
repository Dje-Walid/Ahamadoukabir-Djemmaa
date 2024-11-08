/* eslint-disable class-methods-use-this */
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
    const [newUser] = await db.raw(query, [name, lastname, email, passwordHash, passwordSalt])
    return newUser
  }

  // Get a user by ID
  async getUserById(id) {
    const user = await UserModel.query().findById(id)
    return user
  }

  // Get all users
  async getAllUsers() {
    return await User.query()
  }

  // Update a user by ID
  async updateUser(id, userData) {
    return await User.query().patchAndFetchById(id, userData)
  }

  // Delete a user by ID
  async deleteUser(id) {
    return await User.query().deleteById(id)
  }
}

export default new UserRepository()
