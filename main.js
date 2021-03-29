// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const err = document.getElementById('modal')
err.classList.add('hidden')

const likeButtons = document.getElementsByClassName('like-glyph')

// likeButtons.forEach(like => console.log(like))
// likeButtons.forEach(like => like.addEventListener('click', mimicServerCall))

for(const like of likeButtons) {
  like.addEventListener('click', fillHeartIfNoError)
}

function fillHeartIfNoError() {
  mimicServerCall
  if("Random server error. Try again.") {
    console.log("this was an error")
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
