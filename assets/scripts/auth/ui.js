// this file contains API response handler functions
// it will update the DOM to change the user interface

// import api song request functions
const api = require('../songs/api')
// import functions that update user interface on client request for songs
const ui = require('../songs/ui')

// import object to store API sign in response data (token)

const store = require('../store')

// function to handle API sign up response
const onSignUpSuccess = function () {
  // log success message for sign up
  $('#message').text('You succesfully signed up! Sign in to continue.')
  // clear fields
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const onSignInSuccess = function (response) {
  // extract user information from API response data
  store.user = response.user
  $('#message').text('You succesfully signed in ' + store.user.email)
  // reset field
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#option-header').show()

  // call api
  api.mySongs()
    .then(ui.onAllSongsSuccess)
    .catch(ui.onError)
}

const onChangePasswordSuccess = function () {
  // notify user of succesful password change
  $('#message').text('You succesfully changed your password ' + store.user.email)
  // reset field
  $('#change-password').trigger('reset')

  // hide change password
  $('#change-password').hide()
  // // hide change password menu option
  // $('#show-change-password').show()
  // show game header options
  $('#option-header').show()
}

const onSignOutSuccess = function () {
  // notify user of successful sign out
  $('#message').text('You succesfully logged out ' + store.user.email)
  // erase user store info
  store.user = null

  // hide option header
  $('#option-header').hide()
  // hide songs elements
  $('.songs').hide()
  // hide feed
  $('.feed').hide()
  // show sign up
  $('#sign-up').show()
}

const onError = function () {
  // message user of error
  $('#message').text('Try again!')
  $('.auth').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
