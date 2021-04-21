'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// require auth event handlers
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // hide sign-in on app load
  $('#sign-in').hide()
  // create event listener for sign up submit event
  $('#sign-up').on('submit', authEvents.onSignUp)
})
