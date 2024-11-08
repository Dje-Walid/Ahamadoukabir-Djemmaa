import { HTTPException } from "hono/http-exception"
import { ErrorOccurred } from "../../../error.js"
import PartyRepository from "../../repository/PartyRepository.js"

const deletePartyById = ({ app }) => {
  app.delete("/party/:partyId", async (c) => {
    const { partyId } = await c.req.param()

    try {
      const numDeleted = await PartyRepository.deletePartyById(partyId)
      return c.json({ result: numDeleted })
    } catch (error) {
      console.error(error)
      throw new HTTPException(500, { res: ErrorOccurred })
    }
  })
}

export default deletePartyById
