'use strict';

app.directive('serieCoup', function(){
  return{

    restrict:'E',
    scope:{

      cdc:'='
    },
    templateUrl:'scripts/directives/serieCdc.html',
  };

});
