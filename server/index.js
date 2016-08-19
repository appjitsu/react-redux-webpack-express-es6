// Main starting point of the application
import express from 'express'
import webpack from 'webpack'
import http from 'http'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import yaml from 'node-yaml-config'

import router from './router'

const config = yaml.load(__dirname + '/config.yml')
// console.log("CONFIG:", config)

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
