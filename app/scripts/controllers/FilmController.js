'use strict';

/**
* @ngdoc function
* @name movieBoardApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the movieBoardApp
*/

routeAppControllers.controller('FilmController', ['$scope', function($scope){

$scope.nobody =
{
  film:'Mr.Nobody',
  annee: 2013,
  film_img: 'images/films/nobody.png',
  type:'Drame',
  synopsis:'sisi',
  note: 9
};

$scope.edge =
{
  film:'Edge of Tomorrow',
  annee: 2013,
  film_img: 'images/films/edge.png',
  type:'Drame',
  synopsis:'sisi',
  note: 9
};
$scope.star =
{
  film:'Star Wars VII',
  annee: 2015,
  film_img: 'images/films/star.png',
  type:'Science-fiction',
  synopsis:'sisi',
  note: 9
};

$scope.jump=
{
  film:'21 Jump Street',
  annee: 2015,
  film_img: 'images/films/21jump.png',
  type:'Comedie',
  synopsis:'sisi',
  note: 7.5
};
$scope.ted=
{
  film:'Ted 2',
  annee: 2015,
  film_img: 'images/films/ted2.png',
  type:'Comedie',
  synopsis:'sisi',
  note: 8
};

$scope.minion=
{
  film:'Les Minions',
  annee: 2015,
  film_img: 'images/films/minion.png',
  type:'Comedie',
  synopsis:'sisi',
  note: 8
};
$scope.wolf=
{
  film:'Le Loup de Wall Street',
  annee: 2015,
  film_img: 'images/films/wolf.png',
  type:'Drame',
  synopsis:'sisi',
  note: 8
};
$scope.lab=
{
  film:'Le Labyrinthe 2',
  annee: 2015,
  film_img: 'images/films/lelabyrinthe.png',
  type:'Drame',
  synopsis:'sisi',
  note: 8
};
$scope.lab=
{
  film:'Le Labyrinthe 2',
  annee: 2015,
  film_img: 'images/films/lelabyrinthe.png',
  type:'Drame',
  synopsis:'sisi',
  note: 8
};
// pas encore referencer et pas d'images
/*$scope.ultra=
{
  film:'American Ultra',
  annee: 2015,
  film_img: 'images/films/ultra.png',
  type:'Action',
  synopsis:'sisi',
  note: 8
};*/


}]);
