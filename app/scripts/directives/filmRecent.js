'use strict';

app.directive('filmRecent', function(){
return{
  restrict:'E',
  scope:{

    recent:'='
  },
  templateUrl:'scripts/directives/filmRecent.html',
};
});
