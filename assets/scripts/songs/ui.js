// this file contains API response handler functions
// it will update the DOM to change the user interface

// import object to store API sign in response data (token)
const store = require('../store')

const onShareSongSuccess = function (response) {
  // clear form fields for share song
  $('#share-song').trigger('reset')
  // hide share song form
  $('.songs').hide()
  // message user their post
  $('#message').text(store.user.email + ' was listening to ' + response.song.title + ' by ' + response.song.artist)
}

const onMySongsSuccess = function (response) {
  // clear user messaging
  $('#message').text('')
  // clear feed
  $('.feed').empty()
  // show feed
  $('.feed').show()
  // hide share song form fields
  $('#share-song').hide()

  // filter songs based on owner id
  const mySongs = response.songs.filter(song => song.owner === store.user._id)

  // define user

  // use a forloop to append to the feed
  for (let i = mySongs.length - 1; i >= 0; i--) {
    console.log(mySongs)
    const song = mySongs[i]
    console.log(song)
    const message = `<p>${store.user.email} was listening to ${song.title} by ${song.artist}</p>`
    console.log(message)
    $('.feed').append(message)
  }
}

const onError = function () {
  // message user of error
  $('#message').text('Try again!')
}

module.exports = {
  onShareSongSuccess,
  onMySongsSuccess,
  onError
}
