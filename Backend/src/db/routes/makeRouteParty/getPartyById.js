import { HTTPException } from "hono/http-exception"
import { ErrorOccurred } from "../../../error.js"
import PartyRepository from "../../repository/PartyRepository.js"

const getPartyById = ({ app }) => {
  app.get("/party/:partyId", async (c) => {
    const { partyId } = await c.req.param()

    try {
      const party = await PartyRepository.getPartyById(partyId)
      return c.json({ result: party })
    } catch (error) {
      console.error(error)
      throw new HTTPException(500, { res: ErrorOccurred })
    }
  })
}

export default getPartyById
