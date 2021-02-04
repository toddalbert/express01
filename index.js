const express = require('express')
const bodyParser = require('body-parser')
const { getUsers, createUser } = require('./src/users')

const app = express()
app.use(bodyParser.json())
const port = 3000

app.get('/users', getUsers)
app.post('/users', createUser)

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
