'use strict';

/**
 * @ngdoc function
 * @name movieBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieBoardApp
 */

    routeAppControllers.controller('MainController', ['$scope', function($scope) {
      $scope.master=
        {
          series:'Masters of Sex',
          annee: 2013,
          series_img: 'images/master.png',
          saison: 'Saison 3',
          episode: 2,
          synopsis:"La vie et les amours de William Masters et Virginia Johnson, deux chercheurs spécialisés dans l'étude des comportements sexuels...",
          note: 8
        };

      $scope.wire=
        {
          series:'The Wire',
          annee: 2002,
          series_img: 'images/wire.png',
          saison: 'Seaison 1',
          episode: '',
          synopsis:'',
          note:'8'
        };
      $scope.son=
            {
              series:'Sons of Anarchy',
              annee: 2008,
              series_img: 'images/son.png',
              saison: 'Saison 1',
              episode: '',
              synopsis:'',
              note: 8
            };

        $scope.saul=
              {
                series:'Better Call Saul',
                annee: 2015,
                series_img: 'images/saul.png',
                saison: 'Saison 1',
                episode: '',
                synopsis:'',
                note: 8
              };
        $scope.himym=
                {
                  series:'How I Met Your Mother',
                  annee: 2005,
                  series_img: 'images/himym.png',
                  saison: 'Saison 4',
                  episode: '',
                  synopsis:'',
                  note: 7
                };
          $scope.community=
                  {
                    series:'Community',
                    annee: 2009,
                    series_img: 'images/community.png',
                    saison: 'Saison 2',
                    episode: '',
                    synopsis:'',
                    note: 7
                  };
          $scope.walking=
                    {
                      series:'Walking Dead',
                      annee: 2011,
                      series_img: 'images/walking.png',
                      saison: 'Saison 6',
                      episode: '',
                      synopsis:'',
                      note: 8.5
                    };
        $scope.homeland=
                      {
                        series:'Homeland',
                        annee: 2011,
                        series_img: 'images/homeland.png',
                        saison: 'Saison 1',
                        episode: '',
                        synopsis:'',
                        note: 7.5
                      };







    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
  }]);
