//*TMDB
//* key 92a965805ccb832e42831c5c79bc1c67
//* example endpoint https://api.themoviedb.org/3/movie/550?api_key=92a965805ccb832e42831c5c79bc1c67

//*TMDB API endpoints
var urlMovies = 'https://api.themoviedb.org/3/movie/550?api_key=92a965805ccb832e42831c5c79bc1c67'
var urlMoviesDrama = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesKids = 'https://api.themoviedb.org/3/discover/movie?certification.let=G&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMovies2021 = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesComedy1969 = 'https://api.themoviedb.org/3/discover/movie?with_genres=35&primary_release_year=1969&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesBradEd = 'https://api.themoviedb.org/3/discover/movie?with_people=287,819&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesFincher = 'https://api.themoviedb.org/3/discover/movie?with_people=7467&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesSciFi = 'https://api.themoviedb.org/3/discover/movie?with_genres=878&primary_release_year=1984&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesPop = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&primary_release_year=1977&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'


//* Define our buttons and button container
var buttonContainerMedia = document.getElementById('button-container');
var buttonDrama = document.getElementById('button-drama');
var buttonKids = document.getElementById('button-kids');
var button2021 = document.getElementById('button-2021');
var button1969 = document.getElementById('button-1969');
var buttonBradEd = document.getElementById('button-brad-ed');
var buttonFincher = document.getElementById('button-fincher');
var buttonSciFi = document.getElementById('button-scifi');
var buttonPop = document.getElementById('button-pop');
var buttonFletch = document.getElementById('button-fletch');

//* Define our responses and response containers
var responseContainer = document.getElementById('response-container');
var responseText = document.getElementById('response-text');

//*randomize our results by pulling the getRandom function into our individual fetch functions
const getRandom = (data) => {
    return Math.floor(Math.random() * data);
 }



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
  
  //* Click Listener for Movies: Kids
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  buttonKids.addEventListener("click", function() {
      getApi(urlMoviesKids);
      //hides the whole button container when a selection is made, but keeps the div in place
      buttonContainerMedia.style.visibility = 'hidden';
    });

    //* Fetch Movies: 2021
function getApi(urlMovies2021) {
    fetch(urlMovies2021)
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
  
  //* Click Listener for Movies 2021
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  button2021.addEventListener("click", function() {
      getApi(urlMovies2021);
      //hides the whole button container when a selection is made, but keeps the div in place
      buttonContainerMedia.style.visibility = 'hidden';
    });

//* Fetch Movies: Comedies 1969
function getApi(urlMoviesComedy1969) {
    fetch(urlMoviesComedy1969)
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
  
  //* Click Listener for Movies: Comedies 1969
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  button1969.addEventListener("click", function() {
      getApi(urlMoviesComedy1969);
      //hides the whole button container when a selection is made, but keeps the div in place
      buttonContainerMedia.style.visibility = 'hidden';
    });
  
//* Fetch Movies: Brad Pitt + Edward Norton
function getApi(urlMoviesBradEd) {
    fetch(urlMoviesBradEd)
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
  
  //* Click Listener for Movies: Brad Pitt + Edward Norton 
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  buttonBradEd.addEventListener("click", function() {
      getApi(urlMoviesBradEd);
      //hides the whole button container when a selection is made
      //buttonContainerMedia.style.display = 'none';
    });

    //* Fetch Movies: Fincher
function getApi(urlMoviesFincher) {
    fetch(urlMoviesFincher)
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
  
  //* Click Listener for Movies: Fincher 
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  buttonFincher.addEventListener("click", function() {
      getApi(urlMoviesFincher);
      //hides the whole button container when a selection is made, but keeps the div in place
     buttonContainerMedia.style.visibility = 'hidden';
    });

    //* Fetch Movies: 1984 SciFi
function getApi(urlMoviesSciFi) {
    fetch(urlMoviesSciFi)
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
  
  //* Click Listener for Movies: 1984 SciFi
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  buttonSciFi.addEventListener("click", function() {
      getApi(urlMoviesSciFi);
      //hides the whole button container when a selection is made, but keeps the div in place
      buttonContainerMedia.style.visibility = 'hidden';
    });

    //* Fetch Movies: 1977 Popular
function getApi(urlMoviesPop) {
    fetch(urlMoviesPop)
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
  
  //* Click Listener for Movies: 1977 Popular
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  buttonPop.addEventListener("click", function() {
      getApi(urlMoviesPop);
      //hides the whole button container when a selection is made, but keeps the div in place
      buttonContainerMedia.style.visibility = 'hidden';
    });

    
   
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
        var movieName = document.createElement('h2');
        var movieID = document.createElement('h2');
        var genreID = document.createElement('h2');
        var releaseDate = document.createElement('h2');
        var overview = document.createElement('h2');
        var voteAverage = document.createElement('h2');
        var backdropPath = document.createElement('h2');
        var posterPath = document.createElement('h2');
        movieName.textContent = data.title;
        movieID.textContent = data.id;
        genreID.textContent = data.genre_ids;
        releaseDate.textContent = data.release_date;
        overview.textContent = data.overview;
        voteAverage.textContent = data.vote_average;
        backdropPath.textContent = data.backdrop_path;
        posterPath.textContent = data.poster_path;
        responseContainer.append(movieName);
        responseContainer.append(movieID);
        responseContainer.append(genreID);
        responseContainer.append(releaseDate);
        responseContainer.append(overview);
        responseContainer.append(voteAverage);
        responseContainer.append(backdropPath);
        responseContainer.append(posterPath);
        
        //* new ones here
        //listItem.textContent = data[i].title;
        //listItem.textContent = data[i].genre_ids;
        //listItem.textContent = data[i].release_date;
        //listItem.textContent = data[i].overview;
        //listItem.textContent = data[i].vote_average;
        //listItem.textContent = data[i].backdrop_path;
        //listItem.textContent = data[i].poster_path;
        //* end new
        //responseContainer.append(movieName);
        //responseContainer.append(movieID);
      //}
     
     console.log(randomNumber);
    
  });
}

//* Click Listener for Movies Drama 
//when the button is clicked the API call is made, results returned and the group of buttons are hidden
buttonDrama.addEventListener("click", function() {
    getApi(urlMoviesDrama);
    //hides the whole button container when a selection is made, but keeps the div in place
    buttonContainerMedia.style.visibility = 'hidden';
  });
  