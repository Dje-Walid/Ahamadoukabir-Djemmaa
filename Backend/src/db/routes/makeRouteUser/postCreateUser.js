import UserRepository from "../../repository/UserRepository.js"
import { sanitizeUser } from "../../../sanitizers.js"
import { HTTPException } from "hono/http-exception"
import { ErrorOccurred } from "../../../error.js"
import UserCountByCityRepository from "../../repository/UserCountByCityRepository.js"

const postCreateUser = ({ app }) => {
  app.post("/users", async (c) => {
    const {
      name,
      lastname,
      email,
      password,
      numberAddress,
      street,
      city,
      zipCode,
      countryCode,
    } = await c.req.json()

    try {
      const user = await UserRepository.createUser({
        name,
        lastname,
        email,
        password,
        numberAddress,
        street,
        city,
        zipCode,
        countryCode,
      })

      await UserCountByCityRepository.refreshMaterializedView()

      return c.json({ result: sanitizeUser(user) })
    } catch (error) {
      console.log(error)
      throw new HTTPException(500, { res: ErrorOccurred })
    }
  })
}

export default postCreateUser
