/* eslint-disable camelcase */
import { faker } from "@faker-js/faker"

export const seed = async (knex) => {
  await knex("comment").del()
  await knex("mark").del()
  const first50Users = await knex("users").orderBy("id").limit(50)
  const last50Users = await knex("users").orderBy("id", "desc").limit(50)
  const comments = last50Users.map((lastUser) => {
    const randomUser = faker.helpers.arrayElement(first50Users)

    return {
      consignee_id: lastUser.id,
      author_id: randomUser.id,
      comment: faker.lorem.sentence(),
      publish_at: faker.date.recent(),
    }
  })
  const marks = first50Users.map((firstUser) => {
    const randomUser = faker.helpers.arrayElement(first50Users)

    return {
      noted_id: firstUser.id,
      evaluate_id: randomUser.id,
      name: faker.number.int({ min: 1, max: 5 }),
      published_at: faker.date.recent(),
    }
  })

  await knex("comment").insert(comments)
  await knex("mark").insert(marks)
}
