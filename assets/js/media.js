//*put our code for OMDB here

//*OMDB
//* Erick's API key = 759292a3
//* Darrin's OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=c82fba9d 

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
var responseContainer = document.getElementById('response-container');
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
        //responseText.textContent = response.status;
      }
      // we return response.json()
      return response.json();
    })
    .then(function (data) {
      // this defines data as the results array within data 
      data = data.results;
      var randomNumber = getRandom(data.length);
      //data = data.results[randomNumber];
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        //console.log('hello!')
        console.log(data[i].title);
        var movieName = document.createElement('h3');
        var movieID = document.createElement('h5');
        movieName.textContent = data[i].title;
        movieID.textContent = data[i].id;
        responseContainer.append(movieName);
        responseContainer.append(movieID);
      }
     
     
     console.log(randomNumber);
    
  });
}

 //randomize it 
 const getRandom = (data) => {
    return Math.floor(Math.random() * data);
 }

getApi(urlMoviesDrama);


    //* create var for API key
    //* create vars for each endpoint 
        //* random movie
        //* movie genre 1
        //* movie genre 2
        //* movie genre 3
        //* movie genre 4
        //* movie genre 5
        //* movie by actor 1
        //* movie by actor 2
        //* movie by actor 3
        //* movie by actor 4
        //* movie by actor 5


//* Fetch external endpoint
    //* Return response 
    //* Console log response
    //* Console log errors 




//* Create function to GET random movie
    //* var = random movie 
    //