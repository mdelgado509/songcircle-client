// import api request functions
const api = require('./api')
// import functions that update user interface on client request
const ui = require('./ui')

// import getFormFields function for sending JSON data to API
const getFormFields = require('../../../lib/get-form-fields')

// handle listener event for share song submit action
const onShareSong = function (event) {
  // prevent default refresh
  event.preventDefault()

  // extract form data
  const formData = getFormFields(event.target)

  // call api
  api.shareSong(formData)
    .then(ui.onShareSongSuccess)
    .catch(ui.onError)
}

// handles my songs event click
const onMySongs = function (event) {
  // prevent default refresh
  event.preventDefault()

  // call api
  api.mySongs()
    .then(ui.onMySongsSuccess)
    .catch(ui.onError)
}

// handles delete song event click
const onDeleteSong = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // extract song id
  const id = event.target.id

  // send song id with api call to delete song
  api.deleteSong(id)
    .then(ui.onDeleteSongSuccess)
    .catch(ui.onError)
}

// handle update song event submit
const onUpdateSong = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // extract form data
  const formData = getFormFields(event.target)
  // extract song id
  const id = event.target.id

  // send song id with api call to delete song
  api.updateSong(formData, id)
    .then(ui.onUpdateSongSuccess)
    .catch(ui.onError)
}

// handle home click event show all songs
const onAllSongs = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // call api
  api.mySongs()
    .then(ui.onAllSongsSuccess)
    .catch(ui.onError)
}

module.exports = {
  onShareSong,
  onMySongs,
  onDeleteSong,
  onUpdateSong,
  onAllSongs
}
