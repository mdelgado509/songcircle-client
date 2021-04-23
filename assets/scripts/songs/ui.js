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
    const song = mySongs[i]
    const message = `
    <div class="row">
      <div class="col-lg-10">
        <p id=${song._id} class="text-left">${store.user.email} was listening to ${song.title} by ${song.artist}</p>
      </div>
      <div class="col-lg-2">
        <button id=${song._id} data-cell-index=${song.owner} class="btn btn-sm btn-success update" type="submit">Update</button>
        <button id=${song._id} class="btn btn-sm btn-danger delete" type="submit">Delete</button>
      </div>
    </div>
    `
    $('.feed').append(message)
  }
}

const onDeleteSongSuccess = function () {
  // remove song from feed
  document.getElementById(`${store.delete.id}`).remove()
  // delete temporary id store
  store.delete.id = null
  // send success message
  $('#message').text('Song successfully removed!')
}

const onUpdateSongSuccess = function () {
  // remove temp id store
  store.update.id = null
  // clear fields
  $('#update-song').trigger('reset')

  // show option header
  $('#option-header').show()
  // hide update song
  $('#update-song').hide()

  // send success message
  $('#message').text('Song successfully updated!')
}

const onError = function () {
  // message user of error
  $('#message').text('Try again!')
}

module.exports = {
  onShareSongSuccess,
  onMySongsSuccess,
  onDeleteSongSuccess,
  onUpdateSongSuccess,
  onError
}
