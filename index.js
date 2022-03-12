const express = require('express')
const bodyParser = require('body-parser')
const { genre_route, movie_router, list_router } = require('./router')
const app = express()
const port = 3010

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/genres', genre_route);
// app.use('/movie', movie_router);
// app.use('/list', list_router);

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = server