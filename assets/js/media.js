//*TMDB
//* key 92a965805ccb832e42831c5c79bc1c67
//* example endpoint https://api.themoviedb.org/3/movie/550?api_key=92a965805ccb832e42831c5c79bc1c67
//* Image docs https://developers.themoviedb.org/3/getting-started/images
//*TMDB API endpoints
var urlMovies = 'https://api.themoviedb.org/3/movie/550?api_key=92a965805ccb832e42831c5c79bc1c67'
var urlMoviesDrama = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&primary_release_year=1999&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesKids = 'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=G&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMovies2021 = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesComedy1969 = 'https://api.themoviedb.org/3/discover/movie?with_genres=35&primary_release_year=1969&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesBradEd = 'https://api.themoviedb.org/3/discover/movie?with_people=287,819&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesFincher = 'https://api.themoviedb.org/3/discover/movie?with_people=7467&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesSciFi = 'https://api.themoviedb.org/3/discover/movie?with_genres=878&primary_release_year=1984&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlMoviesPop = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&primary_release_year=1977&api_key=92a965805ccb832e42831c5c79bc1c67&language=en-US'
var urlPoster = 'https://image.tmdb.org/t/p/w500'

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
//* Define our created elements by variable 


//* Create elements to store our returned data
const mediaButtonsEl = document.querySelectorAll('.six.columns')[0];
mediaButtonsEl.prepend("");
const sectionElm = document.createElement('section');
const figureElm = document.createElement('figure');
const figcaptionElm = document.createElement('figcaption');
const imgElm = document.createElement('img');
const pElm1 = document.createElement('p');
const pElm2 = document.createElement('p');
const pElm3 = document.createElement('p');
const olElm = document.createElement('ol');
const Elm = document.createElement('li');


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
        console.log(data.title);
        //* insert data into constructed elements
        sectionElm.id = 'media-result';
        imgElm.src = urlPoster + data.poster_path;
        figcaptionElm.textContent = data.title;
        pElm1.textContent = "release date: " + data.release_date;
        pElm2.textContent = "⭐️ average rating: " + data.vote_average;
        pElm3.textContent = data.overview;
        figureElm.append(imgElm);
        figureElm.append(figcaptionElm);
        sectionElm.append(figureElm);
        sectionElm.append(pElm1);
        sectionElm.append(pElm2);
        sectionElm.append(pElm3);
        sectionElm.append(olElm);
        mediaButtonsEl.prepend(sectionElm);
      
    });
  }
  
  //* Click Listener for Movies: Kids
  //when the button is clicked the API call is made, results returned and the group of buttons are hidden
  buttonKids.addEventListener("click", function() {
      getApi(urlMoviesKids);
      //hides the whole button container when a selection is made, but keeps the div in place
      //buttonContainerMedia.style.visibility = 'hidden';
    });

    //* Fetch Movies: 2021
function getApi(urlMovies2021) {
  fetch(urlMovies2021)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
    })
    .then(function (data) {
      data = data.results;
      var randomNumber = getRandom(data.length);
      console.log("data random number:" + data[randomNumber]);
      data = data[randomNumber];
      console.log(data.title);
      //* insert data into constructed elements
      sectionElm.id = 'media-result';
      imgElm.src = urlPoster + data.poster_path;
      figcaptionElm.textContent = data.title;
      pElm1.textContent = "release date: " + data.release_date;
      pElm2.textContent = "⭐️ average rating: " + data.vote_average;
      pElm3.textContent = data.overview;
      figureElm.append(imgElm);
      figureElm.append(figcaptionElm);
      sectionElm.append(figureElm);
      sectionElm.append(pElm1);
      sectionElm.append(pElm2);
      sectionElm.append(pElm3);
      sectionElm.append(olElm);
      mediaButtonsEl.prepend(sectionElm);
  });
}

//* Click Listener for Movies 2021
button2021.addEventListener("click", function() {
    getApi(urlMovies2021);
    //buttonContainerMedia.style.visibility = 'hidden';
  });

//* Fetch Movies: Comedies 1969
function getApi(urlMoviesComedy1969) {
  fetch(urlMoviesComedy1969)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
    })
    .then(function (data) {
      data = data.results;
      var randomNumber = getRandom(data.length);
      console.log("data random number:" + data[randomNumber]);
      data = data[randomNumber];
      console.log(data.title);
      //* insert data into constructed elements
      sectionElm.id = 'media-result';
      imgElm.src = urlPoster + data.poster_path;
      figcaptionElm.textContent = data.title;
      pElm1.textContent = "release date: " + data.release_date;
      pElm2.textContent = "⭐️ average rating: " + data.vote_average;
      pElm3.textContent = data.overview;
      figureElm.append(imgElm);
      figureElm.append(figcaptionElm);
      sectionElm.append(figureElm);
      sectionElm.append(pElm1);
      sectionElm.append(pElm2);
      sectionElm.append(pElm3);
      sectionElm.append(olElm);
      mediaButtonsEl.prepend(sectionElm);
    
  });
}

//* Click Listener for Movies: Comedies 1969
button1969.addEventListener("click", function() {
    getApi(urlMoviesComedy1969);
    //buttonContainerMedia.style.visibility = 'hidden';
  });

  //* Fetch Movies: Brad Pitt + Edward Norton
function getApi(urlMoviesBradEd) {
  fetch(urlMoviesBradEd)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
    })
    .then(function (data) {
      data = data.results;
      var randomNumber = getRandom(data.length);
      console.log("data random number:" + data[randomNumber]);
      data = data[randomNumber];
      console.log(data.title);
      //* insert data into constructed elements
      sectionElm.id = 'media-result';
      imgElm.src = urlPoster + data.poster_path;
      figcaptionElm.textContent = data.title;
      pElm1.textContent = "release date: " + data.release_date;
      pElm2.textContent = "⭐️ average rating: " + data.vote_average;
      pElm3.textContent = data.overview;
      figureElm.append(imgElm);
      figureElm.append(figcaptionElm);
      sectionElm.append(figureElm);
      sectionElm.append(pElm1);
      sectionElm.append(pElm2);
      sectionElm.append(pElm3);
      sectionElm.append(olElm);
      mediaButtonsEl.prepend(sectionElm);
    
  });
}

//* Click Listener for Movies: Brad Pitt + Edward Norton 
buttonBradEd.addEventListener("click", function() {
    getApi(urlMoviesBradEd);
  });

 //* Fetch Movies: Fincher
 function getApi(urlMoviesFincher) {
  fetch(urlMoviesFincher)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
    })
    .then(function (data) {
      data = data.results;
      var randomNumber = getRandom(data.length);
      console.log("data random number:" + data[randomNumber]);
      data = data[randomNumber];
      console.log(data.title);
      //* insert data into constructed elements
      sectionElm.id = 'media-result';
      imgElm.src = urlPoster + data.poster_path;
      figcaptionElm.textContent = data.title;
      pElm1.textContent = "release date: " + data.release_date;
      pElm2.textContent = "⭐️ average rating: " + data.vote_average;
      pElm3.textContent = data.overview;
      figureElm.append(imgElm);
      figureElm.append(figcaptionElm);
      sectionElm.append(figureElm);
      sectionElm.append(pElm1);
      sectionElm.append(pElm2);
      sectionElm.append(pElm3);
      sectionElm.append(olElm);
      mediaButtonsEl.prepend(sectionElm);
    
  });
}

//* Click Listener for Movies: Fincher 
buttonFincher.addEventListener("click", function() {
    getApi(urlMoviesFincher);
    //buttonContainerMedia.style.visibility = 'hidden';
  });

//* Fetch Movies: 1984 SciFi
function getApi(urlMoviesSciFi) {
  fetch(urlMoviesSciFi)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
    })
    .then(function (data) {
      data = data.results;
      var randomNumber = getRandom(data.length);
      console.log("data random number:" + data[randomNumber]);
      data = data[randomNumber];
      console.log(data.title);
      //* insert data into constructed elements
      sectionElm.id = 'media-result';
      imgElm.src = urlPoster + data.poster_path;
      figcaptionElm.textContent = data.title;
      pElm1.textContent = "release date: " + data.release_date;
      pElm2.textContent = "⭐️ average rating: " + data.vote_average;
      pElm3.textContent = data.overview;
      figureElm.append(imgElm);
      figureElm.append(figcaptionElm);
      sectionElm.append(figureElm);
      sectionElm.append(pElm1);
      sectionElm.append(pElm2);
      sectionElm.append(pElm3);
      sectionElm.append(olElm);
      mediaButtonsEl.prepend(sectionElm);
    
  });
}

//* Click Listener for Movies: 1984 SciFi
buttonSciFi.addEventListener("click", function() {
    getApi(urlMoviesSciFi);
    //buttonContainerMedia.style.visibility = 'hidden';
  });


  //* Fetch Movies: 1977 Popular
function getApi(urlMoviesPop) {
  fetch(urlMoviesPop)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
    })
    .then(function (data) {
      data = data.results;
      var randomNumber = getRandom(data.length);
      console.log("data random number:" + data[randomNumber]);
      data = data[randomNumber];
      console.log(data.title);
      //* insert data into constructed elements
      sectionElm.id = 'media-result';
      imgElm.src = urlPoster + data.poster_path;
      figcaptionElm.textContent = data.title;
      pElm1.textContent = "release date: " + data.release_date;
      pElm2.textContent = "⭐️ average rating: " + data.vote_average;
      pElm3.textContent = data.overview;
      figureElm.append(imgElm);
      figureElm.append(figcaptionElm);
      sectionElm.append(figureElm);
      sectionElm.append(pElm1);
      sectionElm.append(pElm2);
      sectionElm.append(pElm3);
      sectionElm.append(olElm);
      mediaButtonsEl.prepend(sectionElm);
    
  });
}

//* Click Listener for Movies: 1977 Popular
buttonPop.addEventListener("click", function() {
    getApi(urlMoviesPop);
    //buttonContainerMedia.style.visibility = 'hidden';
  });

  //* Fetch Movies: Dramas 
function getApi(urlMoviesDrama) {
  fetch(urlMoviesDrama)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
      }
      return response.json();
    })
    .then(function (data) {
      data = data.results;
      var randomNumber = getRandom(data.length);
      console.log("data random number:" + data[randomNumber]);
      data = data[randomNumber];
      console.log(data.title);
      //* insert data into constructed elements
      sectionElm.id = 'media-result';
      imgElm.src = urlPoster + data.poster_path;
      figcaptionElm.textContent = data.title;
      pElm1.textContent = "release date: " + data.release_date;
      pElm2.textContent = "⭐️ average rating: " + data.vote_average;
      pElm3.textContent = data.overview;
      figureElm.append(imgElm);
      figureElm.append(figcaptionElm);
      sectionElm.append(figureElm);
      sectionElm.append(pElm1);
      sectionElm.append(pElm2);
      sectionElm.append(pElm3);
      sectionElm.append(olElm);
      mediaButtonsEl.prepend(sectionElm);
    
  });
}

//* Click Listener for Movies Drama = Rated R 1999
buttonDrama.addEventListener("click", function() {
    getApi(urlMoviesDrama);
    //buttonContainerMedia.style.visibility = 'hidden';
  });
  