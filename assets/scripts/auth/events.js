// event handler for sign up submit event
const onSignUp = function (event) {
  // prevent default refresh page
  event.preventDefault()

  // test that event is being listened to and handled
  console.log('test')
}

module.exports = {
  onSignUp
}
