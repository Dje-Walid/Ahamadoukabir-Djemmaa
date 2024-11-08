/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
import { faker } from "@faker-js/faker"

export const seed = async (knex) => {
  await knex("enrollment").del()
  await knex("affinity").del()
  await knex("bring_game").del()
  await knex("detail_party").del()
  await knex("party").del()
  const users = await knex("users").select("id")
  const center_of_interest = await knex("center_of_interest").select("id")
  const numberOfParties = 10
  const insertedTypeIds = await knex("type_of_party")
    .insert([
      { name: "Jeux de société" },
      { name: "Jeux vidéo" },
      { name: "Classique" },
    ])
    .returning("id")

  await Promise.all(
    [...Array(numberOfParties)].map(async () => {
      const organizer = faker.helpers.arrayElement(users)
      const randomType = faker.helpers.arrayElement(insertedTypeIds).id
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
      const [partyId] = await knex("party")
        .insert({
          begin_date: faker.date.recent(),
          end_date: faker.date.future(),
          arrange_id: organizer.id,
          number_of_place: faker.number.int({ min: 2, max: 5 }),
          is_paying: faker.datatype.boolean(),
          bring_appetizer: faker.datatype.boolean(),
          address_id: addressId.id,
          type_of_party_id: randomType,
        })
        .returning("id")

      await knex("detail_party").insert({
        party_id: partyId.id,
        game_name: faker.word.words(2),
        platform: faker.helpers.arrayElement(["Xbox", "PC", "PS", "Reel"]),
        number_of_place: faker.number.int({ min: 2, max: 5 }),
      })
      const potentialParticipants = users.filter(
        (user) => user.id !== organizer.id,
      )
      const numberOfParticipants = faker.number.int({ min: 2, max: 5 })
      const partyParticipants = faker.helpers.arrayElements(
        potentialParticipants,
        numberOfParticipants,
      )
      const participants = partyParticipants.map((participant) => ({
        party_id: partyId.id,
        user_id: participant.id,
      }))
      const bringgames = partyParticipants.map((participant) => ({
        party_id: partyId.id,
        user_id: participant.id,
        name: faker.word.words(2),
      }))
      const numberOfInterests = faker.number.int({ min: 1, max: 5 })
      const center_of_interestSelected = faker.helpers.arrayElements(
        center_of_interest,
        numberOfInterests,
      )
      const center_of_interests = center_of_interestSelected.map(
        (interest) => ({
          party_id: partyId.id,
          center_of_interest_id: interest.id,
        }),
      )
      await knex("enrollment").insert(participants)
      await knex("affinity").insert(center_of_interests)
      await knex("bring_game").insert(bringgames)
    }),
  )
}
