/* eslint-disable camelcase */
import { faker } from "@faker-js/faker"

export const seed = async (knex) => {
  await knex("like").del()
  const insertedInterests = await knex("center_of_interest").select("id")
  const users = await knex("users").select("id")
  const affinities = []

  users.forEach((user) => {
    const numberOfInterests = faker.number.int({ min: 1, max: 5 })
    const userInterests = faker.helpers.arrayElements(
      insertedInterests,
      numberOfInterests,
    )

    userInterests.forEach((interest) => {
      affinities.push({
        user_id: user.id,
        center_of_interest_id: interest.id,
      })
    })
  })
  await knex("like").insert(affinities)
}
