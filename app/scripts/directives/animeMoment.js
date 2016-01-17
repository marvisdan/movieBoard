'use strict';

app.directive('animeMoment',function(){
  return{
    restrict:'E',
    scope:{

      moment:'='
    },
    templateUrl:'scripts/directives/animeMoment.html'

  }

});
