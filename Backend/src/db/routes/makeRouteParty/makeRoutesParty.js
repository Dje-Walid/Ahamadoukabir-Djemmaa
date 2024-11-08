import deletePartyById from "./deletePartyById.js"
import getPartyById from "./getPartyById.js"
const makeRoutesParty = ({ app }) => {
  getPartyById({ app })
  deletePartyById({ app })
}

export default makeRoutesParty
