// import apiUrl from config file
const config = require('../config')

// call api to create a new user
const signUp = function (formData) {
  // make api call
  return $.ajax({
    // set method to create user
    method: 'POST',
    // specify url
    url: config.apiUrl + '/sign-up',
    // send the data along to create our user
    data: formData
  })
}

// call api to login a user
const signIn = function (formData) {
  // make api call
  return $.ajax({
    // set method to create user
    method: 'POST',
    // specify url
    url: config.apiUrl + '/sign-in',
    // send the data along to create our user
    data: formData
  })
}

module.exports = {
  signUp,
  signIn
}
