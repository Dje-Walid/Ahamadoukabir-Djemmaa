import UserRepository from "../../repository/UserRepository.js"
import { sanitizeUser } from "../../../sanitizers.js"
import { HTTPException } from "hono/http-exception"
import { ErrorOccurred } from "../../../error.js"

const getUserById = ({ app }) => {
  app.get("/users/:userId", async (c) => {
    const { userId } = await c.req.param()

    try {
      const user = await UserRepository.getUserById(userId)

      return c.json({ result: sanitizeUser(user)})
    } catch (error) {
      console.log(error)
      throw new HTTPException(500, { res: ErrorOccurred } )
    }
  })
}

export default getUserById