// import api request functions
const api = require('./api')
// import functions that update user interface on client request
const ui = require('./ui')

// import getFormFields function for sending JSON data to API
const getFormFields = require('../../../lib/get-form-fields')

// event handler for sign up submit event
const onSignUp = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // extract data from form and store in a variable
  const formData = getFormFields(event.target)

  // call api
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

// event handler for sign in submit event
const onSignIn = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // extract data from form and store in a variable
  const formData = getFormFields(event.target)

  // call api
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

// event handler for change password submit event
const onChangePassword = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // extract data from form and store in a variable
  const formData = getFormFields(event.target)

  // call api
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword
}
