import { config } from "dotenv"
import { resolve } from "path"

config()

export default {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_CONNECTION_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_CONNECTION_DATABASE,
  },
  migrations: {
    directory: resolve("./src/db/migrations"),
    stub: resolve("./src/db/migration.stub"),
  },
  seeds: {
    directory: "./src/db/seeds",
  },
}