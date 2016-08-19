// Main starting point of the application
const express = require('express')
const webpack = require('webpack')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('./router')
const cors = require('cors')
const yaml = require('node-yaml-config')

var config = yaml.load(__dirname + '/config.yml')
console.log("CONFIG:", config)

// App Setup
const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

// Server Setup
const port = process.env.PORT || config.server.port
const server = http.createServer(app)

// start the server
server.listen(port, function() {
  console.log('Server is running on http://localhost:' + port)
})
