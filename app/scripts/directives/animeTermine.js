'use strict';

app.directive('animeTermine', function(){
  return{
    restrict:'E',
    scope:{

      fin:'='
    },
    templateUrl:'scripts/directives/animeTermine.html',


  };



});
