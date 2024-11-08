import UserRepository from "../../repository/UserRepository.js"
import { sanitizeUser } from "../../../sanitizers.js"
import { HTTPException } from "hono/http-exception"
import { ErrorOccurred } from "../../../error.js"

const postCreateUser = ({ app }) => {
  app.post("/users", async (c) => {
    const { name, lastname, email, password} = await c.req.json()

    try {
      const user = UserRepository.createUser(name, lastname, email, password)

      return c.json({ result: sanitizeUser(user)})
    } catch (error) {
      throw new HTTPException(500, { res: ErrorOccurred } )
    }
  })
}

export default postCreateUser