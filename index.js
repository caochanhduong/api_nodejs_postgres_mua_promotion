const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const query = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'API server' })
})

app.get('/api/v1/mua/logins', query.getResultLogin)
app.get('/api/v1/mua/combatforces', query.getResultCombatforce)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})