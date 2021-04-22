'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// require auth event handlers
const authEvents = require('./auth/events')

// require song event handlers
const songEvents = require('./songs/events')

// import object to store API sign in response data (token)

const store = require('./store')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // these event listeners toggle the sign-up and sign-in views
  $('#user-exists').on('click', () => {
    $('#sign-up').hide()
    $('#sign-in').show()
    // reset user messaging
    $('#message').text('')
  })
  $('#new-user').on('click', () => {
    $('#sign-in').hide()
    $('#sign-up').show()
    // reset user messaging
    $('#message').text('')
  })

  // this event shows the change password view
  $('#show-change-password').on('click', () => {
    // reset user messaging
    $('#message').text('')
    // hide change password menu option
    $('#option-header').hide()
    // hide songs elements
    $('.songs').hide()
    // hide feed
    $('.feed').hide()
    // show change password
    $('#change-password').show()
  })

  // AUTH EVENT LISTENERS
  // create event listener for sign up submit event
  $('#sign-up').on('submit', authEvents.onSignUp)
  // create event listener for sign in submit event
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create event listener for change password submit event
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create event listener for sign out on click event
  $('#sign-out').on('click', authEvents.onSignOut)

  // event listener to show share song form
  $('#show-share-song').on('click', () => {
    // reset user messaging
    $('#message').text('')
    // hide feed
    $('.feed').hide()
    // show share song form fields
    $('#share-song').show()
  })

  // SONGS EVENT LISTENERS
  // create event listener for share a song submit event
  $('#share-song').on('submit', songEvents.onShareSong)
  // create event listener to show my songs
  $('#my-songs').on('click', songEvents.onMySongs)
  // create event listener to delete a song
  $(document).on('click', '.delete', songEvents.onDeleteSong)

  // create event listener to check user auth and update a song
  $(document).on('click', '.update', (event) => {
    // prevent default refresh page
    event.preventDefault()
    // data cell index = song.owner
    const owner = $(event.target).data('cell-index')
    if (owner === store.user._id) {
      // reset user messaging
      $('#message').text('')
      // hide menu options
      $('#option-header').hide()
      // hide feed
      $('.feed').hide()
      // show update song
      $('#update-song').show()
    } else {
      $('#message').text('You have to own a post to delete it!')
    }
  })
})
