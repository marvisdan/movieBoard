'use strict';

routeAppControllers.controller('FilmRecentController', ['$scope', function($scope){

$scope.films=

[
  {
    film:'Mr.Nobody',
    annee: 2010,
    film_img: 'images/films/MrNobody.jpg',
    genre:'Fantastique, Science fiction, Drame',
    note: 9,
    synopsis:"Un enfant sur le quai d'une gare. Le train va partir. Doit-il monter avec sa mère ou rester avec son père ? Une multitude de vies possibles découlent de ce choix. Tant qu'il n'a pas choisi, tout reste possible. Toutes les vies méritent d'être vécues.",
    duree:'2h21'
  },
  {
    film:'Edge of Tomorrow',
    annee: 2014,
    film_img: 'images/films/edgeoftom.jpg',
    synopsis:"Dans un futur proche, des hordes d'extraterrestres ont livré une bataille acharnée contre la Terre et semblent désormais invincibles: aucune armée au monde n'a réussi à les vaincre. Le commandant William Cage, qui n'a jamais combattu de sa vie, est envoyé, sans la moindre explication, dans ce qui ressemble à une mission-suicide. Il meurt en l'espace de quelques minutes et se retrouve projeté dans une boucle temporelle, condamné à revivre le même combat et à mourir de nouveau indéfiniment…",
    genre:'Fantastique, Science fiction, Drame',
    duree:'1h53',
    note:7
  },
  {
    film:'Star Wars VII',
    annee: 2015,
    film_img: 'images/films/starwars.jpeg',
    synopsis:'Dans une galaxie lointaine, très lointaine, un nouvel épisode de la saga "Star Wars", 30 ans après les événements du "Retour du Jedi".',
    genre:'Aventure, Action, Science fiction',
    duree:'2h15',
    note:'None'
  },
  {
    film:'21 Jump Street',
    annee: 2015,
    film_img: 'images/films/21jump.jpg',
    type:'Comedie',
    synopsis:"Au lycée, Schmidt et Jenko étaient les pires ennemis, mais ils sont devenus potes à l’école de police. Aujourd’hui, ils sont loin de faire partie de l’élite des flics, mais ça pourrait changer… Mutés dans l’unité secrète de la police, l’équipe du 21 Jump Street, dirigée par le capitaine Dickson, ils vont troquer leur arme et leur badge contre un sac à dos et se servir de leur physique juvénile pour infiltrer un lycée. Le problème, c’est que les ados d’aujourd’hui ne ressemblent pas du tout à ceux de leur époque. Schmidt et Jenko pensaient tout savoir des jeunes mais ils sont complètement à côté de la plaque. Ils vont aussi vite s’apercevoir que certains problèmes de leur propre adolescence sont loin d’être réglés. Les revoilà face aux angoisses et aux terreurs des ados, avec une mission en plus…",
    genre:'Comédie, Policier',
    duree:'1h49',
    note: 7.5
  },
  {
    film:'Ted 2',
    annee: 2015,
    film_img: 'images/films/ted.jpg',
    genre:'Comedie',
    synopsis:"Les deux meilleurs amis du monde vont cette fois-ci s’aventurer en territoire totalement inconnu : le moment est venu de légaliser l’existence de Ted. Nos deux compères vivent toujours à Boston, mais alors que John est désormais célibataire, Ted a emménagé avec Tamy Lynn, la bombe de ses rêves. Alors qu’ils traversent leurs premiers orages maritaux, ils décident de faire un enfant pour consolider leur couple. Leurs espoirs sont brisés lorsque la cour du Massachussetts refuse de reconnaître le statut de personne à Ted, et lui octroie celui de « propriété », ce qui le rend inapte à l’adoption. Il est licencié de son travail au magasin et informé sans autre forme de procès que son mariage est annulé. Furieux et dégoûté, Ted va canaliser sa frustration sur la restauration de ses droits, et demander à son meilleur ami de l’aider à poursuivre en justice la Cour du Massachussetts. Ils engagent alors en tant qu’avocat une jeune activiste de la légalisation de la marijuana : Samantha L. Jackson. Mais Ted est débouté. Le trio s’embarque alors dans un road trip vers New York afin de tenter de convaincre le célèbre avocat des droits civils Patrick Meighan de porter leur dossier en appel. Leur but est de prouver qu’un ours en peluche accro à la bière et à la fumette a les mêmes droits que n’importe quel Américain accro à la bière et à la fumette.",
    duree:'1h55',
    note: 8
  },
  {
    film:'Les Minions',
    annee: 2015,
    film_img: 'images/films/lesminions.jpg',
    genre:'Animation, Famille',
    synopsis:"A l'origine de simples organismes monocellulaires de couleur jaune, les Minions ont évolué au cours des âges au service de maîtres plus abjectes les uns que les autres. Les disparitions répétitives de ceux-ci, des tyrannosaures à Napoléon, ont plongé les Minions dans une profonde dépression. Mais l'un d'eux, prénommé Kevin, a une idée. Flanqué de Stuart, l'adolescent rebelle et de l'adorable petit Bob, Kevin part à la recherche d'un nouveau patron malfaisant pour guider les siens. Nos trois Minions se lancent dans un palpitant voyage qui va les conduire à leur nouveau maître : Scarlet Overkill, la première superméchante de l'histoire. De l'Antarctique au New York des années 60, nos trois compères arrivent finalement à Londres, où ils vont devoir faire face à la plus terrible menace de leur existence : l'annihilation de leur espèce.",
    duree:'1h31',
    note: 8
  },
  {
    film:'Le Loup de Wall Street',
    annee: 2013,
    film_img: 'images/films/leloup.jpg',
    genre:'Biopic, Drame, Policier',
    synopsis:'L’argent. Le pouvoir. Les femmes. La drogue. Les tentations étaient là, à portée de main, et les autorités n’avaient aucune prise. Aux yeux de Jordan et de sa meute, la modestie était devenue complètement inutile. Trop n’était jamais assez…',
    duree:'2h59',
    note: 8
  },
  {
    film:'Le Labyrinthe 2',
    annee: 2015,
    film_img: 'images/films/lelaby.jpg',
    genre:'Aventure, Science fiction, Action',
    synopsis:"Dans ce second volet de la saga épique LE LABYRINTHE, Thomas et les autres Blocards vont devoir faire face à leur plus grand défi, rechercher des indices à propos de la mystérieuse et puissante organisation connue sous le nom de WICKED. Or le monde qu’ils découvrent à l’extérieur du Labyrinthe a été ravagé par l’Apocalypse. Leur périple les amène à la Terre Brûlée, un paysage de désolation rempli d'obstacles inimaginables. Plus de gouvernement, plus d'ordre… et des hordes de gens en proie à une folie meurtrière qui errent dans les villes en ruine. Les Blocards vont devoir unir leurs forces avec d'autres combattants pour pouvoir affronter WICKED et tenter de défier son immense pouvoir.",
    duree: '2h13',
    note: 8
  }

];


}]);
