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
  $('#message').text('Thanks for sharing!')
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

  // use a forloop to append to the feed
  for (let i = mySongs.length - 1; i >= 0; i--) {
    const song = mySongs[i]
    const date = new Date(song.createdAt)
    const timestamp = date.toDateString() + ', ' + date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
    const message = `
    <div id=${song._id} class="row">
      <div class="col-lg-3">
        <p class="date text-muted text-justify">${timestamp}</p>
      </div>
      <div class="col-lg-7">
        <p id=${song._id} class="text-justify">You played <b>${song.title}</b> by <em>${song.artist}</em></p>
      </div>
      <div class="col-lg-2">
        <button id=${song._id} data-cell-index=${song.owner} class="btn btn-sm btn-outline-success update" type="submit">Update</button>
        <button id=${song._id} class="btn btn-sm btn-outline-danger delete" type="submit">Delete</button>
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

const onAllSongsSuccess = function (response) {
  // clear user messaging
  $('#message').text('')
  // clear feed
  $('.feed').empty()
  // show feed
  $('.feed').show()
  // hide share song form fields
  $('#share-song').hide()

  // extract index of songs from response
  const songs = response.songs

  // use a forloop to append to the feed
  for (let i = songs.length - 1; i >= 0; i--) {
    const song = songs[i]
    const date = new Date(song.createdAt)
    const timestamp = date.toDateString() + ', ' + date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
    const message = `
    <div id=${song._id} class="row">
      <div class="col-lg-3">
        <p class="date text-muted text-justify">${timestamp}</p>
      </div>
      <div class="col-lg-9">
        <p id=${song._id} class="text-justify">${song.ownerEmail} played <b>${song.title}</b> by <em>${song.artist}</em></p>
      </div>
    </div>
    `
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
  onDeleteSongSuccess,
  onUpdateSongSuccess,
  onAllSongsSuccess,
  onError
}
