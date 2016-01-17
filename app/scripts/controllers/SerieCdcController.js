'use strict';


routeAppControllers.controller('SerieCdcController', ['$scope', function($scope){

$scope.seriecoeurs=

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
    series:'Califonication',
    annee: 2007,
    series_img:'images/californication.jpg',
    saison: 'Saison 7',
    episode: 12,
    synopsis:"Hank Moody est romancier et séparé de la mère de sa fille de 13 ans. Il est aussi accro aux femmes et aux drogues et ne peut s'empêcher de dire la vérité, tout le temps et à tout le monde. Oui, Hank est auto-destructeur...",
    genre:'Comédie, Drame',
    note: 9
  },
  {
    series:'Breaking Bad',
    annee: 2008,
    series_img:'images/breakingbad.jpg',
    saison: 'Saison 5',
    episode: 16,
    synopsis:"Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior, son fils handicapé, il est obligé de travailler doublement. Son quotidien déjà morose devient carrément noir lorsqu'il apprend qu'il est atteint d'un incurable cancer des poumons. Les médecins ne lui donnent pas plus de deux ans à vivre. Pour réunir rapidement beaucoup d'argent afin de mettre sa famille à l'abri, Walter ne voit plus qu'une solution : mettre ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth, une drogue de synthèse qui rapporte beaucoup. Il propose à Jesse, un de ses anciens élèves devenu un petit dealer de seconde zone, de faire équipe avec lui. Le duo improvisé met en place un labo itinérant dans un vieux camping-car. Cette association inattendue va les entraîner dans une série de péripéties tant comiques que pathétiques.",
    genre:'Drame',
    note: 9
  },
  {
    series:'Spartacus',
    annee: 2010,
    series_img:'images/spartacus.jpg',
    saison: 'Saison 3',
    episode: 10,
    synopsis:"C’est dans le sang et le sable des arènes que s’écrit la légende de Spartacus. Puissant guerrier Thrace trahi par un ambitieux légat romain, Spartacus est réduit en esclavage, contraint de devenir gladiateur s’il veut un jour revoir sa femme. Au sein de l’école de gladiateurs du machiavélique Batiatus et de son épouse Lucretia, Spartacus recevra l’enseignement de l’impitoyable Doctore pour devenir le plus redoutable des combattants. Mais entre l’hostilité des autres gladiateurs et les manigances de Lucretia, Spartacus devra tout sacrifier pour pouvoir survivre...",
    genre:"Drame, Guerre, Historique",
    note: 8.5
  }


];

}]);
