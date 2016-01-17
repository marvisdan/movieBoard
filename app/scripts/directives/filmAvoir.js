'use strict';

app.directive('filmAvoir', function(){

return{

  restrict:'E',
  scope:{

    vus:'='

  },

  templateUrl:'scripts/directives/filmAvoir.html',

};

});
