export const ErrorOccurred = new Response("Unauthorized", {
  status: 500,
  headers: {
    Authenticate: 'error="An error has occurred"',
  },
})
