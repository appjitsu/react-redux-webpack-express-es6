const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')
const path = require('path')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignin = passport.authenticate('local', { session: false })

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'))
  })
  app.get('/secure', requireAuth, function(req, res) {
    res.send({ message: 'Super secret code is ABC123' })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}
