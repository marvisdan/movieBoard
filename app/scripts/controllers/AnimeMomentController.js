
'use strict';

routeAppControllers.controller('AnimeMomentController', ['$scope', function($scope) {

$scope.animes =
[
        {

          anime:'Food Wars',
          annee: 2015,
          anime_img: 'images/animes/food.png',
          saison: 'Saison 1',
          episode: '24',
          synopsis:'Sôma Yukihira rêve de devenir le chef cuisinier dans le restaurant familial et ainsi surpasser les talents culinaires de son père. Alors que Sôma vient juste d être diplômé au collège, son père Jôichirô Yukihira ferme le restaurant pour cuisiner aux États-Unis. L esprit de compétition de Sôma va alors être mis à l épreuve par son père qui lui conseille de rejoindre une école d élite culinaire, où seuls 10 % des élèves sont diplômés. Sôma va-t-il ...',
          note: 9

        },
        {

          anime:'World Trigger',
          annee: 2014,
          anime_img: 'images/animes/trigger.png',
          saison: 'Saison 1',
          episode: '60',
          genre:'Action, Comedie, Science-fiction',
          synopsis:'Yûma Kuga est un étudiant étranger qui vient d’arriver dans la ville de Mikadoshi. Osamu Mikumo, un autre élève de sa classe est chargé de s’occuper du nouveau venu, mais le premier jour à la sortie des cours, ils assistent à l’ouverture d’une brèche dans la réalité, et à l’apparition d’un Naver, race d’envahisseur qui vient d’un monde parallèle. Osamu intervient et utilise une arme issue de la technologie ennemie, le Trigger, qui lui permet de faire appel à des pouvoirs spéciaux. Ce jeune étudiant à l’allure docile se révèle être un membre du BORDER, l’organisation de soldats d’élite qui contient l’invasion des Navers. Mais peu aguerri, Osamu se retrouve en fâcheuse posture et est alors sauvé par le chétif Kuga, lui aussi en possession d’un Trigger… mais d’une puissance sans commune mesure avec celui d’Osamu… Quelle est la véritable identité de Kuga ? Quelle est la raison de sa présence dans la ville de Mikadoshi ?',
          note: 9

        },
        {

          anime:'One Piece',
          annee: 1999,
          anime_img: 'images/animes/op.png',
          saison: 'Saison 22',
          episode: '725',
          genre:'Action, Aventure, Comédie, Fantastique-Mythe',
          synopsis:'Le capitaine Monkey D. Luffy est à la tête des Straw Hat, un groupe d héroïques pirates. Luffy, doté de superpouvoirs obtenus grâce à des fruits magiques, désire plus que tout découvrir One Piece, un fabuleux trésor...',
          note: 9

        },
        {

          anime:'Kuroko no Basket',
          annee: 2012,
          anime_img: 'images/animes/kuroko.png',
          saison: 'Saison 3',
          episode: '75',
          genre:'Comédie, Sport',
          synopsis:'Dans le collège Teikô, le club de Basketball était connu pour être l un des meilleurs du pays. Au sein de l établissement, cinq génies du sport étaient connus sous le nom de « Génération des Miracles » (キセキの世代, Kiseki no Sedai?). Toutefois, les cinq membres considéraient un sixième joueur comme un élément tout aussi prodigieux qu ils ne l étaient : le mystérieux joueur fantôme. À la fin de leur scolarité dans le collège de Teikô, les cinq prodiges se dispersèrent dans des lycées de renommés, désirant chacun mener leur équipe au sommet. C est ainsi que Tetsuya Kuroko (le joueur fantôme en question), un jeune garçon à l apparence chétive, ayant la faculté de diriger ailleurs lattention des autres pour se rendre invisible, intègre le modeste lycée de Seirin, fraîchement construit et avide de dénicher de nouveaux talents pour ses divers clubs de sport. À son arrivée au lycée, la Coach de l équipe de Basket, Riko Aida prend les inscriptions des premières années. C est ainsi que Kuroko est devancé à son inscription par l imposant Taïga Kagami venant tout droit des États-Unis, et désireux de pratiquer le Basketball au Japon, bien qu ayant une très mauvaise impression de ce dernier. Rapidement, les nouveaux arrivés dans le club de Basketball sont testés dans un match face à l équipe du lycée. Kuroko fait alors démonstration de son immense talent de passeur alors que Kagami étale son talent inné et destructeur. Bien que tout les différencie, les deux joueurs finissent par sympathiser et deviennent une paire terriblement efficace. Kagami se promet de devenir le meilleur joueur du pays en surpassant les cinq membres de la Génération des Miracles, alors que Kuroko décide de devenir l ombre de Kagami en l aidant à réaliser son rêve. Plus tard, les deux amis avouent qu ils désirent, avant tout, faire de l équipe de basket-ball de Seirin la meilleure du Japon. - See more at: http://www.otakufr.com/Kuroko-no-Basket-S1-Vostfr/#sthash.vRDOjUhe.dpuf',
          note: 8.5

        },
        {
          anime:'Magi',
          annee: 2012,
          anime_img: 'images/animes/magi.png',
          saison: 'Saison 2',
          episode: '50',
          genre:'Action, Aventure, Fantasie',
          synopsis:'Aladin est un jeune garçon insouciant et curieux qui a pour ami un puissant djinn enfermé dans une flûte nommé Ugo. C est alors qu il rencontre Ali Baba, qu ils décident tous deux de partir à l aventure, explorant des labyrinthes à la recherche de précieux écrins enchantés. Mais leur périple est long et bien plus compliqué que prévu, ils font la rencontre de nombreuses personnes telles que Morgiana, une jeune esclave très mystérieuse. - See more at: http://www.otakufr.com/Magi-The-Labyrinth-of-Magic-Vostfr/#sthash.r7zzr0AM.dpuf',
          note: 9

        },
        {

          anime:'Parasyte',
          annee: 2014,
          anime_img: 'images/animes/Parasyte.jpg',
          saison: 'Saison 1',
          episode: '24',
          genre:'',
          synopsis:'Une nuit, des sphères de la taille d une balle de tennis, contenant des créatures à l apparence de serpents, tombent en nombre inconnu partout dans le monde. Ils sont programmés pour prendre la place des cerveaux humains. Un de ceux-ci s attaque à un jeune homme, Shin ichi, durant son sommeil, en essayant de s introduire par son oreille mais ne peut l atteindre, ce dernier ayant gardé ses écouteurs pour la nuit. Réveillé en sursaut alors que le p...',
          note: 9

        },
        {

          anime:'One Punch Man',
          annee: 2015,
          anime_img: 'images/animes/opm.png',
          saison: 'Saison 1',
          episode: '12',
          genre:'',
          synopsis:'Saitama est un jeune homme sans emploi. Un jour, il rencontre un homme crabe qui recherche un jeune garçon au menton fendu. Saitama finit par rencontrer ce jeune garçon et décide de le sauver de l homme crabe, qu il arrive à battre difficilement. Dès lors, Saitama décide de devenir un super-héros et s’entraîne pendant trois ans. À la fin de son entrainement, il remarque qu il est devenu fort, tellement fort qu il arrive désormais à battre tous ses adversaires avec un seul coup de poing. Sa force monstrueuse est pour lui source de problème, puisqu il ne trouve pas d adversaire à sa mesure et s ennuie dans son métier de héros. Bien qu il ait mis un terme a bon nombre de menaces toutes plus dangereuses les unes que les autres, personne ne semble remarquer l incroyable capacité de Saitama, à lexception de son ami et disciple Genos.',
          note: 9

        },
        {

          anime:'Gate',
          annee: 2015,
          anime_img: 'images/animes/gate.png',
          saison: 'Saison 2',
          episode: '1',
          genre:'Action, Aventure, Fantastique-Mythe',
          synopsis:'Le sous-lieutenant Itami, profitant d une permission pour aller à une convention de fanzines, se retrouve dans une gare du quartier de Ginza à Tokyo, alors qu au même moment une porte géante apparaît. De nombreux soldats, dragons et autres créatures fantastiques sortent de cette porte et attaquent toutes les personnes qu ils rencontrent. Pendant qu Itami aide des civils à fuir, les forces d’autodéfense arrivent et neutralisent rapidement ces ennemis d un autre monde. Plus tard, le gouvernement japonais décide d envoyer ses militaires de l autre côté de la porte pour arrêter les responsables de cette attaque afin qu ils soient punis',
          note: 8.5

        },
        {

          anime:'Btooom!',
          annee: 2012,
          anime_img: 'images/animes/btooom.png',
          saison: 'Saison 1',
          episode: '12',
          genre:'Action',
          synopsis:'Ryota Sakamoto est un jeune homme adepte du jeu Btooom! et classé 10e meilleur joueur au monde. Mais du jour au lendemain, sans savoir pourquoi, il est enlevé par des hommes en noir et se retrouve perdu sur une île déserte. Pour survivre, il va devoir suivre les mêmes règles que dans son jeu vidéo favori : repérer les autres personnes perdues sur l île comme lui et les tuer à l aide des mêmes types de bombes que dans le jeu. Il se retrouve désorm...',
          note: 8

        }

];

}]);
