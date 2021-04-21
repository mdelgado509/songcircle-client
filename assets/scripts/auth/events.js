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

module.exports = {
  onSignUp
}
