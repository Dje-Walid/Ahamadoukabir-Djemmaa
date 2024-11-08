import { serve } from "@hono/node-server"
import { config } from "dotenv"
import { Hono } from "hono"
import knex from "knex"
import knexfile from "../knexfile.js"
import BaseModel from "./db/models/BaseModel.js"
config()

const app = new Hono()
const db = knex(knexfile)
db.on("query", (queryData) => {
  console.log("SQL Query:", queryData.sql)
})
BaseModel.knex(db)

app.get("/", (c) => c.text("Hello Hono!"))

const port = process.env.PORT

// eslint-disable-next-line no-console
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})
