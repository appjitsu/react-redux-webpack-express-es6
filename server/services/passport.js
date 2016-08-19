import passport from 'passport'
import User from '../models/user'
import passportJWT from 'passport-jwt'
import localStrategy from 'passport-local'
import path from 'path'
import yaml from 'node-yaml-config'

const jwtStrategy = passportJWT.Strategy
const extractJwt = passportJWT.ExtractJwt
const config = yaml.load(path.resolve('./server/config.yml'))

// Create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new localStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  User.findOne({ email: email }, function(err, user) {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }

    // compare passwords - is `password` equal to user.password?
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err) }
      if (!isMatch) { return done(null, false) }

      return done(null, user)
    })
  })
})

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: extractJwt.fromHeader('authorization'),
  secretOrKey: config.server.secret
}

// Create JWT strategy
const jwtLogin = new jwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false) }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)
