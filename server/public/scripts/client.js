console.log('client.js sourced');

$(document).ready(onReady);

const jokes = [];

function onReady() {
  console.log('DOM ready');
  $('#addJokeButton').on('click', addJoke);
}

function addJoke() {
  jokes.whoseJoke = $('#whoseJokeIn').val();
  jokes.jokeQuestion = $('#questionIn').val();
  jokes.punchLine = $('#punchlineIn').val();
  console.log(jokes);

  postJoke();
}

function postJoke() {
  $.ajax({
    type: 'POST',
    url: '/api/joke',
    data: jokes,
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

function renderJokes(jokes) {
  $('#outputDiv')
    .append(`<li>Whose Joke:${jokes.whoseJoke} + + Question:${jokes.jokeQuestion} 
    + + Punchline:${jokes.punchLine}</li>`);
}
