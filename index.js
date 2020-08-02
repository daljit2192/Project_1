const express = require('express')
const morgan = require('morgan')
const body_parser = require('body-parser')
const users = require('./routes/users')
const trainers = require('./routes/trainer')
const aboutus = require('./routes/aboutus')

const app = express();
app.use(morgan('dev'))
app.use(express.json())
app.use(body_parser.urlencoded({extended: false}))
app.use(users)
app.use(trainers)
app.use(aboutus)
app.use(express.static('./public'));

app.get('/', (request, response) => {
  response.end();
})

app.listen(3333, () => {
  console.log('The server is running on port 3333');
})