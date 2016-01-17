'use strict';


routeAppControllers.controller('AnimeTermineController', ['$scope', function($scope){

$scope.finis=
[

  {
    anime:'Magi',
    annee: 2012,
    anime_img: 'images/animes/magi.png',
    saison: 'Saison 2',
    episode: '50',
    genre:'Action, Aventure, Fantastique, Comédie, Amour-amitié, Arts martiaux',
    synopsis:'Aladin est un jeune garçon insouciant et curieux qui a pour ami un puissant djinn enfermé dans une flûte nommé Ugo. C est alors qu il rencontre Ali Baba, qu ils décident tous deux de partir à l aventure, explorant des labyrinthes à la recherche de précieux écrins enchantés. Mais leur périple est long et bien plus compliqué que prévu, ils font la rencontre de nombreuses personnes telles que Morgiana, une jeune esclave très mystérieuse. - See more at: http://www.otakufr.com/Magi-The-Labyrinth-of-Magic-Vostfr/#sthash.r7zzr0AM.dpuf',
    note: 9

  },
  {

    anime:'Parasyte',
    annee: 2014,
    anime_img: 'images/animes/Parasyte.jpg',
    saison: 'Saison 1',
    episode: '24',
    genre:'Action, Drame, Horreur, Psychologique, Sci-Fi, Seinen',
    synopsis:'Une nuit, des sphères de la taille d une balle de tennis, contenant des créatures à l apparence de serpents, tombent en nombre inconnu partout dans le monde. Ils sont programmés pour prendre la place des cerveaux humains. Un de ceux-ci s attaque à un jeune homme, Shin ichi, durant son sommeil, en essayant de s introduire par son oreille mais ne peut l atteindre, ce dernier ayant gardé ses écouteurs pour la nuit. Réveillé en sursaut alors que le p...',
    note: 9

  },
  {

    anime:'Naruto Shippuden',
    annee: 2007,
    anime_img: 'images/animes/naruto.jpg',
    saison: 'Saison 1',
    episode: '388',
    genre: 'Action, Fantastique-Mythe',
    synopsis:"L'histoire commence pendant l'adolescence de Naruto, vers ses douze ans. Orphelin cancre et grand farceur, il fait toutes les bêtises possibles pour se faire remarquer. Son rêve : devenir Hokage afin d'être reconnu par les habitants de son village. En effet, le démon renard à neuf queues scellé en lui a attisé la crainte et le mépris des autres villageois, qui, avec le temps, ne font plus de différence entre Kyûbi et Naruto. Malgré cela, Naruto s'entraîne dur afin de devenir genin, le premier niveau chez les ninjas. Après plusieurs essais, il arrive finalement à recevoir son bandeau frontal de Konoha et la promotion qui va avec. Il est alors inclus dans une équipe de trois apprentis ninjas, avec Sakura Haruno et le talentueux Sasuke Uchiwa. Peu après, ils rencontrent leur jōnin, celui qui s'occupera de leur formation : le mystérieux Kakashi Hatake. Au début craint et méprisé par ses pairs, il va peu à peu monter en puissance et gagner le respect et l'affection des villageois grâce notamment aux combats dantesques qu'il remportera face aux ennemis les plus puissants de Konoha.",
    note: 8

  },
  {

    anime:'Bleach',
    annee: 2004,
    anime_img: 'images/animes/bleach.jpg',
    saison: 'Saison 1',
    episode: '366',
    genre: 'Action, Aventure',
    synopsis:"Le personnage principal se nomme Ichigo Kurosaki, un adolescent de quinze ans qui vient de rentrer au lycée. Sa particularité, outre le fait d'avoir des cheveux orange et d'avoir un goût très prononcé pour la bagarre hérité visiblement de son père, est qu'il peut voir et toucher les morts. Régulièrement, Ichigo rencontre donc des fantômes auxquels il essaie de rendre service. Un soir, un Shinigami (terme désignant un être spirituel et pouvant être traduit par « dieu de la mort ») rentre dans sa chambre. Les Shinigami sont chargés de guider les bonnes âmes (les « Plus ») vers le Paradis ou plutôt la « Soul Society » et d'épurer les mauvaises âmes (les « Hollows »). Au même moment, la maison d'Ichigo se fait attaquer par un monstre, un de ces mauvais esprits. Le Shinigami, qui s'appelle Rukia Kuchiki, va tenter de l'anéantir, en vain. Elle explique à notre héros que le Hollow en a après lui car il possède une grande force spirituelle et que, s'il veut se défendre et protéger sa famille, la seule option est qu'elle lui transmette une partie de ses pouvoirs afin qu'il devienne lui-même un Shinigami. À la grande stupéfaction de Rukia, Ichigo hérite non pas de la moitié de ses pouvoirs, mais de tous. Ichigo, devenu Shinigami à son tour, est donc prêt à faire la chasse aux Hollows !",
    note: 8

  },
  {
    anime:'Food Wars',
    annee: 2015,
    anime_img: 'images/animes/food.png',
    saison: 'Saison 1',
    episode: '24',
    genre:'Ecchi, Shounen',
    synopsis:'Sôma Yukihira rêve de devenir le chef cuisinier dans le restaurant familial et ainsi surpasser les talents culinaires de son père. Alors que Sôma vient juste d être diplômé au collège, son père Jôichirô Yukihira ferme le restaurant pour cuisiner aux États-Unis. L esprit de compétition de Sôma va alors être mis à l épreuve par son père qui lui conseille de rejoindre une école d élite culinaire, où seuls 10 % des élèves sont diplômés. Sôma va-t-il ...',
    note: 9

  },
  {

    anime:'One Punch Man',
    annee: 2015,
    anime_img: 'images/animes/opm.png',
    saison: 'Saison 1',
    episode: '12',
    synopsis:'Saitama est un jeune homme sans emploi. Un jour, il rencontre un homme crabe qui recherche un jeune garçon au menton fendu. Saitama finit par rencontrer ce jeune garçon et décide de le sauver de l homme crabe, qu il arrive à battre difficilement. Dès lors, Saitama décide de devenir un super-héros et s’entraîne pendant trois ans. À la fin de son entrainement, il remarque qu il est devenu fort, tellement fort qu il arrive désormais à battre tous ses adversaires avec un seul coup de poing. Sa force monstrueuse est pour lui source de problème, puisqu il ne trouve pas d adversaire à sa mesure et s ennuie dans son métier de héros. Bien qu il ait mis un terme a bon nombre de menaces toutes plus dangereuses les unes que les autres, personne ne semble remarquer l incroyable capacité de Saitama, à lexception de son ami et disciple Genos.',
    note: 9

  },
  {

    anime:'Akame ga Kill',
    annee: 2014,
    anime_img: 'images/animes/opm.png',
    saison: 'Saison 1',
    episode: '24',
    genre:'Action, Aventure, Fantastique, Shounen, Super Power',
    synopsis:'Saitama est un jeune homme sans emploi. Un jour, il rencontre un homme crabe qui recherche un jeune garçon au menton fendu. Saitama finit par rencontrer ce jeune garçon et décide de le sauver de l homme crabe, qu il arrive à battre difficilement. Dès lors, Saitama décide de devenir un super-héros et s’entraîne pendant trois ans. À la fin de son entrainement, il remarque qu il est devenu fort, tellement fort qu il arrive désormais à battre tous ses adversaires avec un seul coup de poing. Sa force monstrueuse est pour lui source de problème, puisqu il ne trouve pas d adversaire à sa mesure et s ennuie dans son métier de héros. Bien qu il ait mis un terme a bon nombre de menaces toutes plus dangereuses les unes que les autres, personne ne semble remarquer l incroyable capacité de Saitama, à lexception de son ami et disciple Genos.',
    note: 9

  },

{
    anime:'Kuroko no Basket',
    annee: 2012,
    anime_img: 'images/animes/kuroko.png',
    saison: 'Saison 3',
    episode: '75',
    genre:'Comedie, Shounen, Sport',
    synopsis:'Dans le collège Teikô, le club de Basketball était connu pour être l un des meilleurs du pays. Au sein de l établissement, cinq génies du sport étaient connus sous le nom de « Génération des Miracles » (キセキの世代, Kiseki no Sedai?). Toutefois, les cinq membres considéraient un sixième joueur comme un élément tout aussi prodigieux qu ils ne l étaient : le mystérieux joueur fantôme. À la fin de leur scolarité dans le collège de Teikô, les cinq prodiges se dispersèrent dans des lycées de renommés, désirant chacun mener leur équipe au sommet. C est ainsi que Tetsuya Kuroko (le joueur fantôme en question), un jeune garçon à l apparence chétive, ayant la faculté de diriger ailleurs lattention des autres pour se rendre invisible, intègre le modeste lycée de Seirin, fraîchement construit et avide de dénicher de nouveaux talents pour ses divers clubs de sport. À son arrivée au lycée, la Coach de l équipe de Basket, Riko Aida prend les inscriptions des premières années. C est ainsi que Kuroko est devancé à son inscription par l imposant Taïga Kagami venant tout droit des États-Unis, et désireux de pratiquer le Basketball au Japon, bien qu ayant une très mauvaise impression de ce dernier. Rapidement, les nouveaux arrivés dans le club de Basketball sont testés dans un match face à l équipe du lycée. Kuroko fait alors démonstration de son immense talent de passeur alors que Kagami étale son talent inné et destructeur. Bien que tout les différencie, les deux joueurs finissent par sympathiser et deviennent une paire terriblement efficace. Kagami se promet de devenir le meilleur joueur du pays en surpassant les cinq membres de la Génération des Miracles, alors que Kuroko décide de devenir l ombre de Kagami en l aidant à réaliser son rêve. Plus tard, les deux amis avouent qu ils désirent, avant tout, faire de l équipe de basket-ball de Seirin la meilleure du Japon.',
    note: 8.5

  },
  {
    anime:'Full Metal Alchemist Brotherhood',
    annee: 2012,
    anime_img: 'images/animes/fma.jpg',
    saison: 'Saison 1',
    episode: '64',
    genre:'Action, Aventure, Drame, Fantastique, Magie, Militaire, Shounen',
    synopsis:"Les épisodes de la série ont une première accroche qui est : « Le principe de l'échange équivalent : pour toute chose reçue, il faut en abandonner une autre de même valeur en retour. Les deux frères Elric partent à la recherche de la « pierre philosophale » car celle-ci ignore ce principe et cela leur permettra de récupérer leur corps d'origine. » L'alchimie est la science qui permet de comprendre, de décomposer et de recomposer la matière. Bien que puissante, l'alchimie a des limites : il est impossible de créer à partir de rien. On ne peut qu'utiliser des matériaux déjà présents à la base. Ainsi, si l'on veut, par exemple, créer une arbalète en bois, avec des flèches à pointes métalliques, il faut transmuter du bois et du métal. En alchimie, c'est la loi fondamentale de l'échange équivalent. Et la transmutation humaine (créer un être humain à partir de ses matières premières) est un tabou absolu. Nul ne doit enfreindre cet interdit.",
    note: 8.5
  },
  {
    anime:'Hajime No Ippo',
    annee: 2012,
    anime_img: 'images/animes/ippo.jpg',
    saison: 'Saison 3',
    episode: '25',
    genre:'Comedie, Drame, Shounen, Sport',
    synopsis:"Ippo continue à défendre son titre de poids plume japonais à partir d'une nomination en plus forte des challengers. Pendant ce temps, Takamura défis pour son deuxième titre WBC dans la catégorie des poids moyens, et Aoki défis pour le titre léger japonais",
    note: 8.5
  },
  {
    anime:'Eyeshield 21',
    annee: 2005,
    anime_img: 'images/animes/eyes.jpg',
    saison: 'Saison 2',
    episode: '123',
    genre:'Comedie, Drame, Sport',
    synopsis:'None',
    note: 8.5
  }

];

}]);
