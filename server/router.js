import passport from 'passport'
import path from 'path'
import yaml from 'node-yaml-config'

import Authentication from './controllers/authentication'
import passportService from './services/passport'

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })
const config = yaml.load(__dirname + '/config.yml')

export default function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'))
  })
  app.get('/secure', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ' + config.server.secret })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}
