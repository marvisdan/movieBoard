'use strict';

app.directive('serieAvoir', function(){
  return{
    restrict:'E',
    scope:{

      avoir:'='
    },
    templateUrl:'scripts/directives/serieAvoir.html'

  };


});
