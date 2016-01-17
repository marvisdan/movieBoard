'use strict';

routeAppControllers.controller('SerieMomentController', ['$scope', function($scope){

$scope.seriemoments=
[

{
  series:'Masters of Sex',
  annee: 2013,
  series_img: 'images/master.png',
  saison: 'Saison 3',
  episode: '2',
  genre:'Drame',
  synopsis:"La vie et les amours de William Masters et Virginia Johnson, deux chercheurs spécialisés dans l'étude des comportements sexuels...",
  note: 8
},
{
  series:'The Wire',
  annee: 2002,
  series_img: 'images/wire.png',
  saison:'Saison 1',
  episode:2,
  genre:'Drame, Policier, Thriller, Judiciaire',
  synopsis:"Quand la police s'efforce de démanteler un réseau tentaculaire de trafic de drogue et du crime à Baltimore.",
  note:8
},
{
  series:'Sons of Anarchy',
  annee: 2008,
  series_img: 'images/son.png',
  saison: 'Saison 1',
  episode: '2',
  synopsis:"Afin de protéger leur ville des dealers et des entrepreneurs locaux, les membres d'un club de motos sont prêts à tout. Dans ce contexte critique, Jax Teller est partagé entre l'amour qu'il porte à sa confrérie et l'appréhension grandissante qu'il nourrit en voyant l'anarchie et le banditisme qui règne dans son club...",
  genre:'Drame, Policier, Thriller',
  note: 8
},
{
  series:'Better Call Saul',
  annee: 2015,
  series_img: 'images/saul.png',
  saison: 'Saison 1',
  episode: '4',
  synopsis:"Six ans avant de croiser le chemin de Walter White, Saul Goodman, connu sous le nom de Jimmy McGill, est un avocat qui peine à joindre les deux bouts, à Albuquerque, au Nouveau-Mexique. Pour boucler ses fins de mois, il n'aura d'autres choix que se livrer à quelques petites escroqueries. Chemin faisant, il va faire des rencontres qui vont se révéler déterminantes dans son parcours : Nacho Varga, ou encore Mike Ehrmantraut, un criminel spécialisé dans le nettoyage, qui deviendra son futur homme de main.",
  genre:'Comédie, Drame',
  note: 8
},
{
  series:'How I Met Your Mother',
  annee: 2005,
  series_img: 'images/himym.png',
  saison: 'Saison 4',
  episode: '5',
  genre:'Comédie',
  synopsis:"Ted se remémore ses jeunes années, lorsqu'il était encore célibataire. Il raconte à ses enfants avec nostalgie ses moments d'égarements et de troubles, ses rencontres et ses recherches effrénées du Grand Amour et les facéties de sa bande d'amis...",
  note: 7
},
{
  series:'Community',
  annee: 2009,
  series_img: 'images/community.png',
  saison: 'Saison 2',
  episode: '10',
  synopsis:"Jeff est avocat. Mais Jeff doit surtout retourner à l'université car son certificat a été invalidé. Entre les femmes au foyer fraîchement divorcées et ceux qui reprennent les études pour garder leur esprit actif, Jeff intègre une bande de joyeux drilles qui découvre les joies de la vie sur le campus. Ils en apprennent plus sur eux-mêmes que sur les cours qu'ils suivent...",
  note: 7
},

{
  series:'Walking Dead',
  annee: 2011,
  series_img: 'images/walking.png',
  saison: 'Saison 6',
  episode: '1',
  synopsis:"Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, un groupe d'hommes et de femmes mené par l'officier Rick Grimes tente de survivre... Ensemble, ils vont devoir tant bien que mal faire face à ce nouveau monde devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.",
  genre:'Drame, Epouvante-horreur',
  note: 8.5
},
{
  series:'Homeland',
  annee: 2011,
  series_img: 'images/homeland.png',
  saison: 'Saison 1',
  episode: '',
  genre:'Drame, Thriller',
  synopsis:"Huit ans après la disparition de deux soldats américains lors de l'invasion de Bagdad, l'un d'entre eux réapparaît, seul survivant alors que tout le monde le pensait mort depuis longtemps. Rapatrié aux États-Unis, il est accueilli chaleureusement par sa famille, ses amis et le gouvernement. Seule contre tous, l'agent de la CIA Carrie Mathison, qui a passé plusieurs années en Afghanistan, est persuadée que le héros est en réalité devenu un espion à la solde de l'ennemi, préparant la prochaine attaque terroriste sur le sol américain. Sans réelle preuve et montrée du doigt suite à un incident diplomatique qu'elle a déclenché quelques mois plus tôt, Carrie va devoir se battre pour prouver que ce qu'elle avance est la réalité...",
  note: 7.5
}
];

}]);
