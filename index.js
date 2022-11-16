const express = require('express')
const ErrorHandeler = require('./helpers/errorhandeler')
const app = express()
const port = 5000
const db = require('./server')
const getAlldataRoute = require('./routes/getAlldata.route')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
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