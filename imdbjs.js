var app = angular.module('myApp', []);

var UserDetails = new Array();

app.controller('myCtrl', function($scope, $http) {
//   $http({
//     method : "GET",
//       url : "http://www.omdbapi.com/?t=lion&apikey=68ff470f"
//   }).then(function mySuccess(response) {
//       console.log(response.data)
//   }, function myError(response) {
//     allData = response.statusText;
//   });
     
  $scope.myfunction= function(moviename){
      console.log(moviename);
      $http({
            method : "GET",
              url : "http://www.omdbapi.com/?t="+ moviename +"&apikey=68ff470f"
          }).then(function mySuccess(response) {
              console.log(response.data)
              $scope.movieTitle = response.data.Title;
              $scope.movieYear = response.data.Year;
              $scope.movieRated = response.data.Rated;
              $scope.movieReleased = response.data.Released;
              $scope.movieRuntime = response.data.Runtime;
              $scope.movieActors = response.data.Actors;
              $scope.movieAwards = response.data.Awards;
              $scope.movieBoxOffice = response.data.BoxOffice;
              $scope.movieCountrye = response.data.Country;
              $scope.movieDVD = response.data.DVD;
              $scope.movieGenre = response.data.Genre;
              $scope.movieLanguage = response.data.Language;
              $scope.moviePlot = response.data.Plot;
              $scope.moviePoster = response.data.Poster;
              $scope.movieProduction = response.data.Production;
              $scope.movieDirector = response.data.Director;
              $scope.movieWriter = response.data.Writer;
              $scope.movieimdbRating = response.data.imdbRating;
              $scope.movieimdbID = response.data.imdbID;
              $scope.movieimdbVotes = response.data.imdbVotes;
              //
              // $scope.movieimdbUrl = "https://www.imdb.com/title/"+movieimdbID+"/"

          }, function myError(response) {
             console.log("Error occured")
          });
  }

});
