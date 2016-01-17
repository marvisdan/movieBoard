'use strict';

app.directive('serieTermine', function(){
return{
  restrict:'E',
  scope:{

    terminus:'='
  },
  templateUrl:'scripts/directives/serieTermine.html'


};

});
