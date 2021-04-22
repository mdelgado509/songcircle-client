// this file contains API response handler functions
// it will update the DOM to change the user interface

// import object to store API sign in response data (token)
const store = require('../store')

// import api request functions
const api = require('./api')

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
    const song = mySongs[i]
    const message = `<p id=${song._id} >${store.user.email} was listening to ${song.title} by ${song.artist} <button id=${song._id} class="btn btn-sm btn-success update" type="submit">Update</button><button id=${song._id} class="btn btn-sm btn-danger delete" type="submit">Delete</button></p>`
    $('.feed').append(message)
  }
}

const onDeleteSongSuccess = function () {
  console.log(store.delete.id)
  // remove song from feed
  document.getElementById(`${store.delete.id}`).remove()
  // $('.feed').remove(`#${store.delete.id}`)
  // delete temporary id store
  store.delete.id = null
  // send success message
  $('#message').text('Song successfully removed!')
}

const onError = function () {
  // message user of error
  $('#message').text('Try again!')
}

module.exports = {
  onShareSongSuccess,
  onMySongsSuccess,
  onDeleteSongSuccess,
  onError
}
