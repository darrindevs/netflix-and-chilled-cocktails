//*TMDB
//* key 92a965805ccb832e42831c5c79bc1c67
//* example endpoint https://api.themoviedb.org/3/movie/550?api_key=92a965805ccb832e42831c5c79bc1c67

//*TMDB API endpoints
var urlMovies = 'https://api.themoviedb.org/3/movie/550?api_key=92a965805ccb832e42831c5c79bc1c67'
var urlMoviesDrama = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesKids = 'https://api.themoviedb.org/3/discover/movie?certification.let=G&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'

//* Define our buttons and button container
var buttonContainerMedia = document.getElementById('button-container');
var buttonDrama = document.getElementById('button-drama');
var buttonKids = document.getElementById('button-kids');

//* Define our responses and response containers
var responseContainer = document.getElementById('response-container');
var responseText = document.getElementById('response-text');

//*randomize our results by pulling the getRandom function into our individual fetch functions
const getRandom = (data) => {
    return Math.floor(Math.random() * data);
 }

//* Fetch Movies: Dramas 
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
      console.log("data random number:" + data[randomNumber]);
      data = data[randomNumber];
      //for (var i = 0; i < data.length; i++) {
        //console.log('hello!')
        console.log(data.title);
        var movieName = document.createElement('h1');
        var movieID = document.createElement('h2');
        movieName.textContent = data.title;
        movieID.textContent = data.id;
        responseContainer.append(movieName);
        responseContainer.append(movieID);
      //}
     
     console.log(randomNumber);
    
  });
}

//* Click Listener for Movies Drama 
//when the button is clicked the API call is made, results returned and the group of buttons are hidden
buttonDrama.addEventListener("click", function() {
    getApi(urlMoviesDrama);
    //hides the whole button container when a selection is made
    //buttonContainerMedia.style.display = 'none';
  });

//* Fetch Movies: Kids
function getApi(urlMoviesKids) {
    fetch(urlMoviesKids)
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
        console.log("data random number:" + data[randomNumber]);
        data = data[randomNumber];
        //for (var i = 0; i < data.length; i++) {
          //console.log('hello!')
          console.log(data.title);
          var movieName = document.createElement('h1');
          var movieID = document.createElement('h2');
          movieName.textContent = data.title;
          movieID.textContent = data.id;
          responseContainer.append(movieName);
          responseContainer.append(movieID);
        //}
       
       console.log(randomNumber);
      
    });
  }
  
  //* Click Listener for Movies Drama 
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  buttonKids.addEventListener("click", function() {
      getApi(urlMoviesKids);
      //hides the whole button container when a selection is made
      //buttonContainerMedia.style.display = 'none';
    });
  

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