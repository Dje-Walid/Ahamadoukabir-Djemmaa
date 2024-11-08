import getUserById from "./getUserById.js"
import postCreateUser from "./postCreateUser.js"

const makeRoutesUser = ({ app }) => {
  getUserById({ app })
  postCreateUser({ app })
}

export default makeRoutesUser
