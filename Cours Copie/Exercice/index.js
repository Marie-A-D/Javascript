//Interation avec l'utilisateur
//alert("Message")
//prompt("Quel âge as-tu?")
//confirm("Voulez-vous supprimer ce message ?")

//----------------------------------------
//LES VARIABLES
//-----------------

// on va créer une variable âge et lui donner la valeur 3
//let age = 3; //=> définir une varialble => Première déclaration
//age = 25;
//age = 30;

//let message = "Hello there !";

//console.log("Bonjour");
//console.log(message)
//console.log(age);

//-----------------------------
//CONSTANTES
//------------------------------

//const prenom = "Marie";
//console.log(prenom);


//-----------------------------
//MANIPULATION DES NOMBRES
//----------------------------

//les opérateurs de base => +, -, *, /, %

//let nombre1 = 12;
//let nombre2 = 30;
//let nombre = nombre1 + nombre2;
//nombre = nombre1 / nombre2;

//console.log(nombre);

//INcrémentation

//nombre = nombre + 4; //Première syntaxe
//nombre += 4; //Deuxième syntaxe --> ça fait exactement la même chose

//Incrémentation de 1

//nombre --; 
//--nombre;

//nombre *= 5;
//nombre /= 2;
//nombre %= 3;


//console.log(nombre);

//nombre++ =>ajout différé de la valeur +1
//++nombre =>ajout immédiat de la valeur +1

//-----------------------------------
//MANIPULER DES CHAINES DE CARACTERE
//-------------------------------------

//let text = "Je déteste Bootstrap !!";
//let text2 = 'Une autre syntaxe'
//let text3 = `J'adore les sushi` => cette syntaxe est mieux car elle permet d'inséré des variables.

//console.log(text);
//console.log(text2);
//console.log(text3);


//-----------------------------------
//LA CONCATENATION 
//-------------------------------------

//let prenom = "Martin";
//let nom = "MARTIN";

//let phrase = "Bonjour, " + prenom + " " + nom; //PREMIERE syntaxe -- contrainiante 
//let phrase2 = `Bonjour ${prenom} ${nom}`; //Deuxième syntaxe -- je conseille

//console.log(phrase2);
//console.log(phrase2. length); //permet de savoir le nombre de caractère
//console.log(phrase2.indexOf("Marie")); //permet de savoir si le paramètre correspond // -1 corresponde à une donnée qui n'existe pas
//console.log(phrase2.slice (8, 15)) //découpe une chaine caractère
//console.log(phrase2.toUpperCase()) //mettre tout le text en majuscule
//console.log(phrase2.toLowerCase()) //mettre tout le text en minuscule
//console.log(phrase2.replace("Martin", "Adam")) //permet de remplacer un caractère



//-----------------------------------
//COMMENT MANIPULER LES TABLEAUX
//-------------------------------------

//let tableau = [20, "test", true, 18.25];

//pour inverser l'odre du tableau
//tableau.reverse();

//ajouter une valeur dans mon tableau
//au debut
//tableau.unshift("Coucou ici!", 2022);
//console.log(tableau);

//rajouter à la fin du tableau
//tableau.push("Fin du tabaleau")

//Retirer un valeur du tableau
//au debut
//tableau.shift(); //permet de stocker la valeur retirée
//valeur = tableau[0];


//à la fin
//tableau.pop();

//modifier les valeurs d'un tableau
//tableau.splice(2,0,"Inséré"); //le premier défini l'amplacement //le deuxième défini combien d'élémentson veut supprimer a^rès l'incertion



//-----------------------------------
//CONDITIONS ET OPERATEURS DE COMPARAISON
//-------------------------------------


//let nombre = 12;


//On pose une question
//Egalite "faible" == => 
//Egalite strict === //FORTEMENT CONSEILLER => car elle prend en compte la valeur et la chaîne de caractère

//if (nombre == 12) {
 //la conditin est respectée
 //console.log("Le nombre est égal à 12");

//}else{
//la condition n'est pas respectée
//console.log("Le nombre n'est pas égal à 12");
//}


//On pose une question
//Inegalite (différent de ) "faible" !=
//Inegalite (différent de ) "strict" !==

//if(nombre != 12){
     //la conditin est respectée
  //  console.log("Le nombre n'est pas égal à 12");
//}else{
    //la condition n'est pas respectée
   // console.log("Le nombre est égal à 12");
   // }


//Inférieur

//if(nombre < 12){
     //la conditin est respectée
  // console.log("Le nombre inférieur à 12");
//}else{
    //la condition n'est pas respectée
 //console.log("Le nombre n'est pas inférieur à 12");
 //}

//Supérieur
 //if(nombre > 12){
    //la conditin est respectée
  //console.log("Le nombre supérieur à 12");
//}else{
   //la condition n'est pas respectée
//console.log("Le nombre n'est pas supérieur à 12");
//}

//booléen (true or false)
//let bool = true;

//if(bool ===true) {
    //console.log("Le booléen est à true")
//}else{
    //console.log("Le booléen est à false")
//}

//conditions longue
// ET avec && esperluette
//OU avec || pipe

//let destination = prompt("Où souhaitez-vous aller ?")
//const gares = ["Surdon","Caen","Le Mans", "Paris"];


//if (destination === gares[0] ){
    //console.log("Votre train ce trouve quai 1");
//}
//else if(destination === gares[1]){
    //console.log("Votre train ce trouve quai 3");
//}

//else if(destination === gares[2]){
    //console.log("Votre train ce trouve quai 5");
//}

//else if(destination === gares[3]){
    //console.log("Il n'y pas de train en destination de Paris aujourd'hui");
//}

//else{
    //console.log(`Tu ne peux pas partir à ${destination} à partir d'Alençon`)
//}

//typeof => permet de savoir le type de la variable

//-----------------------------------
//BOUCLES
//-------------------------------------


//les boucles permettent de répéter les instructions
//BOUCLE FOR (pour)
//la boucle for avec cette syntaxe prend 3 paramettres
//1er param : initialisation
//2eme param : la condition
//3eme param : incrémentation/décrémentation => itération

//for(let compteur = 0; compteur <=10; compteur ++){
   // console.log(compteur)
//}


// FAIRE ATTENTION AUX BOUCLES INFINIES !


//let eleves = ["Benoit","Clément","Marie-Amélie","Corentin", "Quentin","Thomas","Nhu"];
//console.log(eleves);
//console.table(eleves);

//console.error("Voici une erreur !");
//console.warn("Voici un warning !");

//for(let ligne = 0; ligne < eleves.length; ligne++){
    //console.log(eleves[0]);
//}

//Deuxième syntaxe

//for (let ligne in eleves){
  //  console.log(eleves[ligne]);
//}

//Troisième syntaxe

//for (let ligne of eleves){
    //console.log(ligne);
//}


//BOUCLE WHILE ou (TANT QUE)

//let pass = "wxcv";

//while(pass !=="azerty"){
  //  pass = prompt("Entrez votre mot de passe");
//}

//autre syntaxe exclusive au tableau
//forEach

//eleves.forEach((valeur, index, tableau) => {
   // console.table(index,valeur);
//});


//-----------------------------------
//PORTEE DES VARIABLES
//-------------------------------------

//let test = "eferagdd"


//let nom ="Jean";
//var nom2 = "Robert"

//if(test === test){
 //   let nom ="Pierre";
 //   console.log(nom);

   // var nom2 = "John";
   // console.log(nom2);
//}

//console.log(`La variable nom contenant ${nom2} marche !!!`);
//console.log(`La variable nom contenant ${nom} ne marche pas`);


//-----------------------------------
//CONDITIONS : Switch
//-------------------------------------
// let mois = prompt("Entrez un mois en chiffre");
// console.log(typeof(mois)); // permet de savoir le type de la variable
// mois = parseInt(mois); //permet de convertir une chaîne de caractère en Number

// switch(mois){
//     case 1:
//         console.log("janvier");
//     break;    

//     case 2 :
//         console.log("février");
//     break; 

//     case 3 :
//         console.log("Mars");
//     break;

//     case 4 :
//         console.log("Avril");
//         break;
//     case 5 :
//         console.log("Mai");
//         break;
//     case 6 :
//         console.log("Juin");
//         break;

//     case 7 :
//         console.log("Juillet");
//     break;

//     case 8 :
//         console.log("Aout");
//     break;

//     case 9 :
//         console.log("Septembre");
//     break;

//     case 10 :
//         console.log("Octobre");
//     break;

//     case 11 :
//         console.log("Novembre");
//     break;

//     case 12 :
//         console.log("Décembre");
//     break;

//     default:
//         console.log("Le mois renseigné n'existe pas")
//     break;    
// }


//-----------------------------------
//OBJET : INTRO
//-------------------------------------

// let voiture = { //dans les objets on met des virgule // SAUF DANS POUR LA DERNIERE INSTRUCTION [entre = et {]
//     couleur : "orange",
//     marque : "Peugeot",
//     puissance : "10 cv",
//     carburant : "gazole",
//     annee : 1970
// } //{
//     couleur : "rouge",
//     marque : "renault",
//     puissance : "05 cv",
//     carburant : "gazole",
//     annee : 2000

// }];

// console.log(voiture[0].marque, voiture[1].marque);


//-----------------------------------
//RAPPEL DES TYPES
//-------------------------------------

//String : chaîne de caractères
//Number : nombre entier
//boolean : booléen (vrai ou faux)
//null : rempli un champ vide
//undefined : non defini
//array = [] //liste -> tableau
//object = {} //objet

//let avion = Object.assign

//-----------------------------------
//LES FONCTIONS
//les fonctions sont des blocs de code qui sont rassemblés sous un même nom
//pour permettre d'executer le bloc de code en appelant le nom de la fonction
//-------------------------------------

// function direBonjour(){
//     console.log("Bonjour")
// }
// //comment affiche t-on bonjour ?
//direBonjour ()+"Serge";

// direBonjour();

//Commentaire JSDOC
/**
 * Cette fonction permet de dire bonjour selon le nom et le prénom 
 * @param {string} prenom prénom de l'utilisateur
 * @param {string} nom non de l'utilisateur
 */

//Première syntaxe
// function direBonjour(prenom,nom){
//     console.log(`Bonjour ${prenom} ${nom}`);
// }

// let prenomUser = prompt("Veuillez entrer votre Prénom");
// let nonUser = prompt("Veuillez entrer votre NOM");

// direBonjour(prenomUser,nonUser);


//Deuxième syntaxe

/**
 * Aditionne 2 nombres
 * @param {number} nb1 Nombre 1
 * @param {number} nb2 Nombre 2
 * @returns résultat de l'addition
 */

// let addition = function(nb1, nb2){
//     let total = nb1 + nb2;
//     console.log(total);
//     return total;
//     //Le mot return permet de resortir une information
//     //return stop la fonction /!\ Dernière innstruction
// }


// addition (45858,9585850)


//Troisième syntaxe //CONSEILLER

//function fléchée //Arrow function

//function direBonjour (){

//}

// let direBonjour = () => { 
//     console.log("Bonjour"); 
// }

// direBonjour();

//Faire une fonction qui calcul le nombre carré d'un nombre
//demander à un utilisateur via le prompt un nombre
//Utilisez les fonctions flechées


// let carre = () => {

//     nbre = prompt("Veuillez choisir un nombre");
//     let res = nbre * nbre
//     console.log(res);
//     return res;
// }

// carre();


//Façon classique

// const nombres = (25, 12, 8, 55, 20, 35);

// function addition (nb1, nb2, nb3, nb4){
//  return nb1, nb2, nb3, nb4;
// }
// let resultat = addition (...nombres);
// console.log(resultat);
// console.log(nombres)

// const tableau1 = ["a","b","c"];
// const tableau2 = ["d","e","f"];
// const tableau3 = [...tableau1, tableau2];
// const tableau4 = [tableau1,tableau2];
// console.log(tableau3)
// console.log(tableau4)

//faire une fonction qui permet de calculer une moyenne
//avec trois nombre -- utilisez les paramètre

// function moyenne (nb1,nb2,nb3){
//    let resultat = (nb1+nb2+nb3)/3
//    return console.log(resultat);
// }

// moyenne (15,12,18)

//deuxième méthode 

//Moyenne avec intéraction utilisateur
// let dwwm = [];
// for (let j = 0; j < 10; j++){
//     question = prompt("Veuillez entrer la note: " + j);
//     question = parseInt(question);
//     dwwm.push(question);

// }
// console.log(dwwm);
// let resultat = 0;
// function moyenne(){
//     for (let i = 0; i < dwwm.length; i++) {
    
    
//     resultat += dwwm[i];
    
//     }
// resultat = resultat / dwwm.length
// return console.log(resultat);
// };

// moyenne();


//-----------------------------------
//La fonction Math
//-------------------------------------

// let calcul = 5-0.5; //donne 4.95
// calcul = Math.round(calcul); //floor arrondir les nombres -de 5 et round permet d'arrondir à 5
// console.log(calcul);

// console.log(Math)

// let chiffre = (Math.round(Math.random() * 100));
// chiffre=(Math.round(Math.random ()) * 100)

// console.log(chiffre);


//Math.random();  cela génère un chiffre entre 0 et 1 
//si on veut aller de 0 à 100 ou à autre chiffre il faut multiplier par exemple * 100


//Faire le jeu à devinette
//chiffre trop grand
//chiffre trop petit
//chiffre trouver

// function deviner (){
//     let aDeviner = Math.floor(Math.random() * 100); // cela génère un chiffre automatiquement entre 0 et 100
//     let question = prompt("Veuillez entrer un chiffre"); 
//     console.log(typeof(question));
//     question = parseInt(question);

//     while(question < 1 || question > 100){ //le chiffre entrer ne sera pas inférieur à 1 ni supérieur à 100
//     question = parseInt(question);  //définir le type question comme un chiffre
//         if(question <1){ //si question est inf à 1
//         console.log("Veuilliez entrer un chiffre supérieur à 1") 
//         question = prompt("Veuillez entrer un chiffre"); //reposer la question
//         }

//         if(question >100){
//         console.log("Veuilliez entrer un chiffre inférieur à 100") 
//         question = prompt("Veuillez entrer un chiffre");   
//         }
//     }

//     while(question !== aDeviner){
//     question = parseInt(question);
//         if(question < aDeviner) {     
//         console.log("Ton chiffre est trop petit")
//         question = prompt("Veuillez entrer un chiffre");
//         }

//         if(question > aDeviner) {   
//         console.log("Ton chiffre est trop grand") 
//         question = prompt("Veuillez entrer un chiffre");
//         }

//     }

//         if(question === aDeviner){
//         console.log("Bravo tu as trouvé !");    
//         }


//         //

// }
   
// deviner();




//--------------------
//MANIPULER LES DATES 
//--------------------

//Déclarer la date du jour

// let maDate = new Date();

// console.log(maDate);

// //let autreDate  = new Date(2022, 6, 29, 16, 30) //Première syntaxe
// let autreDate = new Date.now("2022-07-21 16:30:00"); //2ème syntaxe format ISO

// //pour changer l'année d'une date, on utilise SET pour définir
// // autreDate.setFullYear(2023);
// //pour obtenir l'année la date ou le jour //GET
// // autreDate.getDate();
// let temps = maDate-autreDate

// //Dans un jour il y a 24h * 60m * 60s *1000 = 86 400 000 ms 

// let reste = temps-jours*86400000
// console.log(temps);

// // Dans 1 jour il y a 24h * 60m * 60s * 1000  = 86 400 000 ms

// let jours = Math.floor(temps / 86400000);

// console.log(jours);

// // Reste temps - (jours * durée)

// let reste = temps - jours * 86400000;
// console.log(reste);

// // Heures : 60 mn * 60s * 1000 = 3 600 000ms

// let heures = Math.floor(reste / 3600000); 
// console.log(heures);

// //

// console.log(`Jours: ${jours}, Heures: ${heures} `);






























































































































































































































