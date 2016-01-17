'use strict';

app.directive('animeCoupdecoeur', function(){

return{

 restrict: 'E',
 scope: {

   cdc: '='


 },

 templateUrl: 'scripts/directives/animeCdC.html'
};


});
