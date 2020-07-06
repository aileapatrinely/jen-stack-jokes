const { get } = require('jquery');

console.log('client.js sourced');

$(document).ready(onReady);

const joke = {};

function onReady() {
  console.log('DOM ready');
  $('#addJokeButton').on('click', addJoke);
}

function addJoke() {
  joke.whoseJoke = $('#whoseJokeIn').val();
  joke.jokeQuestion = $('#questionIn').val();
  joke.punchLine = $('#punchlineIn').val();
  console.log(joke);

  postJoke();
}

function postJoke() {
  $.ajax({
    type: 'POST',
    url: '/api/joke',
    data: joke,
  })
    .then((response) => {
      getJokes();
    })
    .catch((err) => {
      console.log(err);
      alert('Ya Done Messed Up.');
    });
}

function getJokes(response) {
  $.ajax({
    type: 'GET',
    url: '/api/joke',
  })
    .then((response) => {
      renderJokes();
    })
    .catch((err) => {
      console.log(err);
      alert(`You're the joke, ya messed up.`);
    });
}
