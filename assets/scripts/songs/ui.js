// this file contains API response handler functions
// it will update the DOM to change the user interface

// import object to store API sign in response data (token)
const store = require('../store')

const onShareSongSuccess = function (response) {
  $('.songs').hide()
  console.log(response)
  $('#message').text(store.user.email + ' was listening to ' + response.song.title + ' by ' + response.song.artist)
}

const onError = function () {
  // message user of error
  $('#message').text('Try again!')
}

module.exports = {
  onShareSongSuccess,
  onError
}
