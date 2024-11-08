import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { HTTPException } from "hono/http-exception"
import { logger } from "hono/logger"
import { prettyJSON } from "hono/pretty-json"
import makeRoutesUser from "./src/db/routes/makeRouteUser/makeRoutesUser.js"
import BaseModel from "./src/db/models/BaseModel.js"
import knex from "knex"
import knexfile from "./knexfile.js"

const run = () => {
  const app = new Hono()
  const db = knex(knexfile)
  db.on("query", (queryData) => {
    console.log("SQL Query:", queryData.sql)
  })
  BaseModel.knex(db)

  app.use("*", cors())
  app.use(logger())
  app.use(prettyJSON())

  makeRoutesUser({ app })

  app.onError((err) => {
    if (err instanceof HTTPException) {
      return err.getResponse()
    }

    return err
  })

  serve(
    {
      fetch: app.fetch,
      port: process.env.PORT,
    },
    (info) => {
      // eslint-disable-next-line no-console
      console.log(`Listening on http://localhost:${info.port}`)
    },
  )
}

export default run
