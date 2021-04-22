// import apiUrl from config file
const config = require('../config')

// import object to extract API sign in response data (token)
const store = require('../store')

// call api to share a new song
const shareSong = function (formData) {
  // make api call
  return $.ajax({
    // set method to share a new song
    method: 'POST',
    // specify url
    url: config.apiUrl + '/songs',
    // send the data along to create our user
    data: formData,
    // verify user with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// call api to index songs
const mySongs = function () {
  // make api call
  return $.ajax({
    // set method to view my songs
    method: 'GET',
    // specify url
    url: config.apiUrl + '/songs',
    // verify user with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// call api to delete a song
const deleteSong = function (id) {
  // make api call
  return $.ajax({
    // set method to DELETE to delete a song
    method: 'DELETE',
    // specify url and song id extension
    url: config.apiUrl + '/songs/' + id,
    // verify user with token
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  shareSong,
  mySongs,
  deleteSong
}
