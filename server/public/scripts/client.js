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

  postJoke()
}

function