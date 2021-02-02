const express = require('express')

const app = express()
const port = 3000

app.get('/', (request, response) => {
  // do a bunch of stuff
  response.status(200).json({
    message: "Hello JavaScript Nerds!",
    status: 200,
    name: "Todd",
    age: 45
  })
})

app.listen(port, () => console.log('Listening on http://localhost:' + port))
