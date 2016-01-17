'use strict';

app.directive('serieMoment', function(){
  return{
    restrict:'E',
    scope:{

      moment:'='
    },
    templateUrl:'scripts/directives/serieMoment.html'
  };
});
