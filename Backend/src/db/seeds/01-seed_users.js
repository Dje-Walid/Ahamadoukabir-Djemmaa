/* eslint-disable camelcase */
import { faker } from "@faker-js/faker"
import { pbkdf2Sync, randomBytes } from "node:crypto"

// eslint-disable-next-line max-lines-per-function
export const seed = async (knex) => {
  await knex("users").del()
  await knex("address").del()
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
  const users = await Promise.all(
    [...new Array(100)].map(async () => {
      const [addressId] = await knex("address")
        .insert({
          number: faker.number.int({ min: 1, max: 1000 }),
          street: faker.location.street(),
          city: faker.location.city(),
          zip_code: faker.location.zipCode(),
          country_code: faker.location.countryCode("alpha-3"),
          addtional: faker.word.adjective(),
        })
        .returning("id")
      const firstName = faker.person.firstName()
      const lastname = faker.person.lastName()
      const [passwordHash, passwordSalt] = await hashPassword(
        faker.internet.password(),
      )

      return {
        name: firstName,
        lastname,
        email: faker.internet.email(firstName, lastname),
        password_hash: passwordHash,
        password_salt: passwordSalt,
        address_id: addressId.id,
      }
    }),
  )

  await knex("users").insert(users)
}
