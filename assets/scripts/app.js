'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// require auth event handlers
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // these event listeners toggle the sign-up and sign-in views
  $('#user-exists').on('click', () => {
    $('#sign-up').hide()
    $('#sign-in').show()
  })
  $('#new-user').on('click', () => {
    $('#sign-in').hide()
    $('#sign-up').show()
  })

  // this event shows the change password view
  $('#show-change-password').on('click', () => {
    // reset user messaging
    $('#message').text('')
    // hide change password menu option
    $('#show-change-password').hide()
    // show change password
    $('#change-password').show()
  })

  // AUTH EVENT LISTENERS
  // create event listener for sign up submit event
  $('#sign-up').on('submit', authEvents.onSignUp)
  // create event listener for sign in submit event
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create event listener for change password submit event
  $('#change-password').on('submit', (event) => {
    event.preventDefault()
    console.log('test')
  })
})
