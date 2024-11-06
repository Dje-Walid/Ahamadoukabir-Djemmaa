import { config } from "dotenv"

const getApiUrl = () => {
  config()

  return process.env.API_URL
}
const apiRoutes = {
  sign: {
    signIn: () => `${getApiUrl}/signIn`,
  },
}

export default apiRoutes
