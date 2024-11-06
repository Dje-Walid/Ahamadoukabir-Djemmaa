import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { config } from "dotenv"

config()

const app = new Hono()

app.get("/", (c) => c.text("Hello Hono!"))

const port = process.env.PORT

// eslint-disable-next-line no-console
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
