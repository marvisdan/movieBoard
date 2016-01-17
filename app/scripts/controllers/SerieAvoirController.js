'use strict';

routeAppControllers.controller('SerieAvoirController', ['$scope', function($scope){
$scope.avoirs=
[
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
    episode: 2,
    synopsis:"Afin de protéger leur ville des dealers et des entrepreneurs locaux, les membres d'un club de motos sont prêts à tout. Dans ce contexte critique, Jax Teller est partagé entre l'amour qu'il porte à sa confrérie et l'appréhension grandissante qu'il nourrit en voyant l'anarchie et le banditisme qui règne dans son club...",
    genre:'Drame, Policier, Thriller',
    note: 8
  },
  {
    series:'House of Lies',
    annee: 2012,
    series_img: 'images/house.jpg',
    saison: 'Saison 1',
    episode: 1,
    synopsis:"Marty Kaan est un consultant en finance et management auprès de grandes entreprises, adepte des filles, de la fête et de la frime. Aidé par sa fine équipe d'experts, il sillonne les Etats-Unis à la recherche de nouvelles victimes tout en élevant son jeune fils du mieux qu'il peut alors que son ex-femme, qui est aussi sa concurrente principale, n'en a que faire...",
    genre:'Comédie',
    note: 8
  },
  {
    series:'Web Therapy',
    annee: 2011,
    series_img: 'images/webtherapy.jpg',
    saison: 'Saison 1',
    episode: 1,
    synopsis:"La psychothérapeute Fiona Wallice mène des sessions de trois minutes via Internet avec ses clients, dans l'espoir d'aller à l'essentiel et éviter les désagréments des déplacements.",
    genre:'Comédie',
    note: 8
  },
  {
    series:'Selfie',
    annee: 2011,
    series_img: 'images/selfie.jpg',
    saison: 'Saison 1',
    episode: 1,
    synopsis:"A la suite d'une rupture humiliante qui a été filmée et qui a fait le buzz sur les réseaux sociaux, Eliza, une jeune femme dans la vingtaine totalement obsédée par son image, devient la risée de ses collègues et de tout internet. Elle a tout à coup plus de followers qu'elle ne l'aurait jamais imaginé, mais toujours aucun véritable ami pour la réconforter. Néanmoins pleine de ressources, elle demande de l'aide à l'expert en marketing de sa boîte pour redorer son image. Mais l'opération s'annonce délicate : Eliza vit littéralement dans un monde parallèle...",
    genre:'Comédie',
    note: 8
  }

];

}]);
