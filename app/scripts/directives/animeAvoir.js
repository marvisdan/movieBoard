'use strict';


app.directive('animeVoir', function(){

return{

  restrict:'E',
  scope: {

    avoir: '='


  },
  templateUrl: 'scripts/directives/animeAvoir.html',

};


});
