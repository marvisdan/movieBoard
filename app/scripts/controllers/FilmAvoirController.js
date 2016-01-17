'use strict';


routeAppControllers.controller('FilmAvoirController', ['$scope', function($scope){

$scope.filmvus =
[

  {
    film:'Transcendance',
    annee: 2014,
    film_img: 'images/films/transcendance.jpg',
    synopsis:"Dans un futur proche, un groupe de scientifiques tente de concevoir le premier ordinateur doté d’une conscience et capable de réfléchir de manière autonome. Ils doivent faire face aux attaques de terroristes anti-technologies qui voient dans ce projet une menace pour l’espèce humaine. Lorsque le scientifique à la tête du projet est assassiné, sa femme se sert de l’avancée de ses travaux pour « transcender » l’esprit de son mari dans le premier super ordinateur de l’histoire. Pouvant désormais contrôler tous les réseaux liés à internet, il devient ainsi quasi omnipotent. Mais comment l’arrêter s’il perdait ce qui lui reste d’humanité ?",
    genre:'Science fiction, Thriller',
    duree:'1h53'
  },
  {
    film:'Hotel Transilvanie 2',
    annee: 2015,
    film_img: 'images/films/HotelTransylvania2.jpg',
    synopsis:" Dracula et sa bande de monstres déjantés sont de retour ! À l’hôtel Transylvanie, beaucoup de choses ont évolué : Dracula a enfin accepté de dégeler son cœur et d’ouvrir la porte aux humains. Mais il se fait du souci pour son petit-fils, Dennis : mi-humain mi-monstre, ce gamin est bien trop adorable à son goût, et il risque de faire un piètre vampire ! Alors, quand les parents du petit, Mavis et Johnny, s’absentent, Drac fait appel à ses amis Frank, Murray, Wayne et Griffin pour apprendre à Dennis à devenir un monstre, un vrai. Personne ne s’attendait à ce que Vlad, le père de Drac – un vampire très grincheux et très vieille école – choisisse ce moment pour débarquer à l’hôtel. Et quand il découvre que son arrière-petit-fils a du sang humain, rien ne va plus…",
    genre:'Animation, Fantastique, Comédie',
    duree:'1h29'
  },
  {
    film:'007 Spectre',
    annee: 2015,
    film_img: 'images/films/spectre.jpg',
    synopsis:"Un message cryptique surgi du passé entraîne James Bond dans une mission très personnelle à Mexico puis à Rome, où il rencontre Lucia Sciarra, la très belle veuve d’un célèbre criminel. Bond réussit à infiltrer une réunion secrète révélant une redoutable organisation baptisée Spectre.Pendant ce temps, à Londres, Max Denbigh, le nouveau directeur du Centre pour la Sécurité Nationale, remet en cause les actions de Bond et l’existence même du MI6, dirigé par M. Bond persuade Moneypenny et Q de l’aider secrètement à localiser Madeleine Swann, la fille de son vieil ennemi, Mr White, qui pourrait détenir le moyen de détruire Spectre. Fille de tueur, Madeleine comprend Bond mieux que personne…En s’approchant du cœur de Spectre, Bond va découvrir qu’il existe peut-être un terrible lien entre lui et le mystérieux ennemi qu’il traque…",
    genre:'Action, Espionnage',
    duree:'2h30'
  },
  {
    film:'Batman vs Superman',
    annee: 2016,
    film_img: 'images/films/batman.jpg',
    synopsis:'La suite des nouvelles aventures de Superman, confronté pour la première fois au chevalier noir de Gotham City, Batman.',
    genre:'Action, Aventure',
    duree:'2h30'
  },
  {
    film:'The Big Short: Le Casse du Siècle',
    annee: 2015,
    film_img: 'images/films/TheBigShort.jpg',
    synopsis:'Wall Street. 2005. Profitant de l’aveuglement généralisé des grosses banques, des medias et du gouvernement, quatre outsiders anticipent l’explosion de la bulle financière et mettent au point… le casse du siècle ! Michael Burry, Mark Baum, Jared Vennett et Ben Rickert : des personnages visionnaires et hors du commun qui vont parier contre les banques … et tenter de rafler la mise !',
    genre:'Drame, Comédie, Biopic',
    duree:'2h11'
  }

];


}]);
