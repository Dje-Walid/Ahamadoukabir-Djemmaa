/* eslint-disable class-methods-use-this */
import PartyModel from "../models/PartyModel.js"
class PartyRepository {
  async getPartyById(id) {
    const partyResult = await PartyModel.knex().raw(
      `
      SELECT
      p.begin_date, p.end_date, p.number_of_place,p.is_paying, p.bring_appetizer, 
      arrange.name AS arrange_name, arrange.lastname AS arrange_lastname, arrange.email AS arrange_email,
      tp.name AS type_of_party_name, 
      a.*, 
      participants.id AS participant_id, participants.name AS participant_name, participants.lastname AS participant_lastname, participants.email AS participant_email,
		  center_of_interest.name as interest_name,
		  bring_users_game.name as bring_game_name,
		  detail_party.game_name as gamename, detail_party.number_of_place as nbplacegame, detail_party.platform as platformgame
      FROM party p
      
      INNER JOIN type_of_party tp ON p.type_of_party_id = tp.id
      INNER JOIN users arrange ON p.arrange_id = arrange.id
      INNER JOIN address a ON p.address_id = a.id
      INNER JOIN enrollment e ON p.id = e.party_id
      INNER JOIN users participants ON e.user_id = participants.id
	    INNER JOIN affinity  ON p.id = affinity.party_id
      INNER JOIN center_of_interest  ON affinity.center_of_interest_id = center_of_interest.id
	    INNER JOIN bring_game  ON p.id = bring_game.party_id
      INNER JOIN users bring_users_game  ON bring_game.user_id = bring_users_game.id
	    INNER JOIN detail_party  ON p.id = detail_party.id
      WHERE p.id = ?
      `,
      [id],
    )
    const rows = partyResult.rows
    if (!rows.length) {
      return null
    }
    const {
      id: partyId,
      arrange_name,
      arrange_lastname,
      arrange_email,
      type_of_party_name,
      participant_id,
      participant_email,
      participant_name,
      participant_lastname,
      gamename,
      nbplacegame,
      platformgame,
      ...partyData
    } = rows[0]
    const party = {
      ...partyData,
      id: partyId,
      arrange: {
        name: arrange_name,
        lastname: arrange_lastname,
        email: arrange_email,
      },
      detailGame: {
        gamename,
        nbplacegame,
        platformgame,
      },
      typeOfParty: type_of_party_name,
      participants: rows.map((row) => ({
        id: row.participant_id,
        name: row.participant_name,
        lastname: row.participant_lastname,
        email: row.participant_email,
      })),
      interests: Array.from(new Set(rows.map((row) => row.interest_name))).map(
        (name) => ({ name }),
      ),
      bring_games: Array.from(
        new Set(rows.map((row) => row.bring_game_name)),
      ).map((name) => ({ name })),
    }
    party.participants = Array.from(
      new Map(party.participants.map((p) => [p.id, p])).values(),
    )
    return party
  }
}

export default new PartyRepository()
