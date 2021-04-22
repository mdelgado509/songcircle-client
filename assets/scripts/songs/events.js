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

const onMySongs = function (event) {
  // prevent default refresh
  event.preventDefault()

  // call api
  api.mySongs()
    .then(ui.onMySongsSuccess)
    .catch(ui.onError)
}

module.exports = {
  onShareSong,
  onMySongs,
}
