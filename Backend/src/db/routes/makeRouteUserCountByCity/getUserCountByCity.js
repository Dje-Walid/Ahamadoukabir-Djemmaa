import { HTTPException } from "hono/http-exception"
import { ErrorOccurred } from "../../../error.js"
import UserCountByCityRepository from "../../repository/UserCountByCityRepository.js"

const getUserCountByCity = ({ app }) => {
  app.get("/user-count-by-city", async (c) => {
    try {
      const userCountByCity = await UserCountByCityRepository.getUserCountByCity()

      return c.json({ result: userCountByCity })
    } catch (error) {
      console.log(error)
      throw new HTTPException(500, { res: ErrorOccurred } )
    }
  })
}

export default getUserCountByCity