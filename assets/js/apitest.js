
//*TMDB
//* Darrin's key 92a965805ccb832e42831c5c79bc1c67
//* example endpoint https://api.themoviedb.org/3/movie/550?api_key=92a965805ccb832e42831c5c79bc1c67


//* Create API endpoint URL
//var urlMovies = 'http://www.omdbapi.com/?apikey=759292a3r=json&type=movie&genre=action&';
//OMDB
//var urlMovies = 'http://www.omdbapi.com/?apikey=c82fba9d&s=type&type=movie&genre=action&y=1981&page=100';

//* Going forward with TMDB 
//TMDB
//var urlMovies = 'https://api.themoviedb.org/3/movie/550?api_key=92a965805ccb832e42831c5c79bc1c67'
//* This will give us 10000 results for genre = drama
var urlMoviesDrama = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var responseText = document.getElementById('response-text');

//*create a list to put our data in 
var mediaList = document.querySelector('ul');



function getApi(urlMoviesDrama) {
  fetch(urlMoviesDrama)
    .then(function (response) {
      console.log(response);
      // We check whether the response.status equals 200, as follows:
      if (response.status === 200) {
      	//If it does, we assign the status code from response.status to the textContent
        responseText.textContent = response.status;
      }
      // we return response.json()
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].title;
        listItem.textContent = data[i].genre_ids;
        listItem.textContent = data[i].release_date;
        listItem.textContent = data[i].overview;
        listItem.textContent = data[i].vote_average;
        listItem.textContent = data[i].backdrop_path;
        listItem.textContent = data[i].poster_path;
        mediaList.appendChild(listItem);
      }
  });
}

getApi(urlMoviesDrama);


    