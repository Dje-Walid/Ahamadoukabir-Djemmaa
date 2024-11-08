import getUserById from "./getUserById.js"
import getUsers from "./getUsers.js"
import postCreateUser from "./postCreateUser.js"

const makeRoutesUser = ({ app }) => {
  getUserById({ app })
  getUsers({ app })
  postCreateUser({ app })
}

export default makeRoutesUser
