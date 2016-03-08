'use strict';

/**
 * @ngdoc overview
 * @name movieBoardApp
 * @description
 * # movieBoardApp
 *
 * Main module of the application.
 */
var app= angular
  .module('movieBoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'routeAppControllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/film.html',
        controller: 'FilmController'
            })
      .when('/serieTV', {
        templateUrl: 'views/serieTV.html',
        controller: 'MainController'
      })
      .when('/animes', {
        templateUrl: 'views/animes.html',
        controller: 'AnimeController'
      })
      .when('/animeMoment',{
        templateUrl:'views/vueAnimeMoment.html',
        Controller: 'AnimeMomentController'
      })
      .when('/animeCoupDeCoeur',{
        templateUrl:'views/vueAnimeCdC.html',
        Controller: 'AnimeCdCController'
      })
      .when('/animeAVoir', {
        templateUrl:'views/vueAnimeAVoir.html',
        Controller: 'AvoirController'
      })
      .when('/animeTermine', {
        templateUrl:'views/vueAnimeTermine.html',
        Controller: 'AnimeTermineController'
      })
      .when('/filmAvoir', {
        templateUrl:'views/vueFilmAvoir.html',
        Controller: 'FilmAvoirController'
      })
      .when('/filmVu',{
        templateUrl:'views/vueFilmRecent.html',
        Controller:'FilmRecentController'
      })
      .when('/serieTermine', {
        templateUrl:'views/vueSerieTermine.html',
        Controller:'SerieTermineController'
      })
      .when('/serieMoment',{
        templateUrl:'views/vueSerieMoment.html',
        Controller:'SerieMomentController'
      })
      .when('/serieCdc',{
        templateUrl:'views/vueSerieCdc.html',
        Controller:'SerieCdcController'

      })
      .when('/serieAvoir',{
        templateUrl:'views/vueSerieAvoir.html',
        Controller:'SerieAvoirController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });

  var routeAppControllers = angular.module('routeAppControllers' , []);
