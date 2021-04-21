// this file contains API response handler functions
// it will update the DOM to change the user interface

// function to handle API sign up response
const onSignUpSuccess = function () {
  // log success message for sign up
  $('#message').text('You succesfully signed up! Sign in to continue.')
  // clear fields
  $('#sign-up').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
}

const onError = function () {
  // message user of error
  $('#message').text('Try again!')
  $('.auth').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onError
}
