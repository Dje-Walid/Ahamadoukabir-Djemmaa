import UserRepository from "../../repository/UserRepository.js"
import { HTTPException } from "hono/http-exception"
import { ErrorOccurred } from "../../../error.js"

const getUsers = ({ app }) => {
  app.get("/users", async (c) => {
    try {
      const users = await UserRepository.getAllUsers()

      return c.json({ result: users })
    } catch (error) {
      console.log(error)
      throw new HTTPException(500, { res: ErrorOccurred } )
    }
  })
}

export default getUsers