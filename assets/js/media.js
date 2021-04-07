//*put our code for OMDB here

//* API key = 759292a3

//* Create API endpoint URL
var urlMovies = 'http://www.omdbapi.com/?apikey=759292a3&';

var responseText = document.getElementById('response-text');

//var responseText = document.getElementById('response-text');

function getApi(urlMovies) {
  fetch(urlMovies)
    .then(function (response) {
      console.log(response);
      // We check whether the response.status equals 200, as follows:
      if (response.status === 200) {
      	//If it does, we assign the status code from response.status to the textContent
        responseText.textContent = response.status;
      }
      // we return response.json()
      return response.json();
  });
}

getApi(urlMovies);


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