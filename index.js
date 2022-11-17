const express = require('express')
const cors = require('cors')
const ErrorHandeler = require('./helpers/errorhandeler')
const app = express()
const port = 5000
const db = require('./server')
const getAlldataRoute = require('./routes/getAlldata.route')
const bodyParser = require("body-parser");
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors())
app.use(bodyParser.json());
app.use('/api/v1',getAlldataRoute)
db.databaseConnection()
// not found
app.all("*", (req, res) => {
    res.send("404 not found")
    })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// ErrorHandeler function
app.use(ErrorHandeler)