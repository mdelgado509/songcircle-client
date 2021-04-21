// import apiUrl from config file
const config = require('../config')

// import object to extract API sign in response data (token)
const store = require('../store')

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
    // set method to sign in user
    method: 'POST',
    // specify url
    url: config.apiUrl + '/sign-in',
    // send the data along to sign in our user
    data: formData
  })
}

// call api to change user password
const changePassword = function (formData) {
  // make ajax api call
  return $.ajax({
    // set method to change password
    method: 'PATCH',
    // Call URL to change password
    url: config.apiUrl + '/change-password/',
    // send the formData along to update user password
    data: formData,
    // verify user with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// call api to sign out user
const signOut = function () {
  // make ajax api call
  return $.ajax({
    // set method to sign Out
    method: 'DELETE',
    // Call url to sign out
    url: config.apiUrl + '/sign-out/',
    // verify user with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
