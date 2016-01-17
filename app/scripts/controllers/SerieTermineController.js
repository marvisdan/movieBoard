'use strict';

routeAppControllers.controller('SerieTermineController',['$scope', function($scope){

$scope.termines=
[
  {
    series:'Heroes',
    annee: 2006,
    series_img: 'images/heroes.jpg',
    saison: 'Saison 4',
    episode: 19,
    synopsis:"Partout dans le monde, un certain nombre d'individus en apparence ordinaires se révèlent dotés de capacités hors du commun : la régénération cellulaire, la téléportation, la télépathie... Ils ne savent pas ce qui leur arrive, ni les répercussions que tout cela pourrait avoir. Ils ignorent encore qu'ils font partie d'une évolution qui va changer le monde à jamais !",
    genre:'Drame, Fantastique, Science fiction',
    note: 8
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
    series:'Dates',
    annee: 2013,
    series_img:'images/dates.jpg',
    saison: 'Saison 1',
    episode: 9,
    synopsis:"Tentative de compréhension de la complexité des relations amoureuses contemporaines, au travers d'un rendez-vous par épisode...",
    genre:"Drame",
    note: 8
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
  },
  {
    series:'Futurama',
    annee: 1999,
    series_img:'images/futurama.jpg',
    saison: 'Saison 7',
    episode: 26,
    synopsis:"Accidentellement cryogénisé le 31 décembre 1999 alors qu'il livrait une pizza, Fry se réveille 1000 plus tard à New York. A l'aube de l'an 3000, le monde a bien changé, peuplé de robots et d'extrarrestres. Le jeune homme retrouve l'un de ses descendants qui l'engage lui et ses nouveaux amis, Leela et Bender, au Planet Express, une entreprise de livraison. Ensemble, ils vont devoir faire face à de périlleuses et délirantes missions dans un monde des plus surprenants.",
    genre:"Comédie, Science fiction, Animation",
    note: 8
  },
  {
    series:'Utopia',
    annee: 2013,
    series_img:'images/utopia.jpg',
    saison: 'Saison 2',
    episode: 6,
    synopsis:"Utopia est une bande-dessinée légendaire sur laquelle plane le mystère. Mais quand Ian, Becky, Grant et Wilson, un petit groupe de personnes qui n'avaient jusqu'alors aucun lien, se retrouvent chacun en possession d'un exemplaire original du manuscrit, leurs vies basculent soudainement et brutalement. Immédiatement pris pour cible par une impitoyable organisation meurtrière connue sous le nom du Network, les membres du groupe, terrifiés, n'ont plus qu'une seule solution s'ils veulent survivre : courir !",
    genre:'Drame, Thriller',
    note: 8
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
  }

];

}]);
