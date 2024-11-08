/* eslint-disable camelcase */

export const seed = async (knex) => {
  await knex("center_of_interest").del()
  const centerOfInterest = [
    "photographie",
    "lecture",
    "peinture",
    "randonnée",
    "natation",
    "cyclisme",
    "musique",
    "cuisine",
    "voyage",
    "jardinage",
    "programmation",
    "écriture",
    "dessin",
    "jeux vidéo",
    "yoga",
  ]
  const interests = centerOfInterest.map((interest) => ({
    name: interest,
  }))

  await knex("center_of_interest").insert(interests)
}
