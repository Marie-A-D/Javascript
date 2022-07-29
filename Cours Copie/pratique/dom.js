//------------------------
//DOM - MANIPULATION
//------------------------

//Le DOM est utiliser pour manipuler le contenu, le style et la structure d'une page 

//getElementById();
// const title = document.getElementById("title-container");

// console.log(title);

// //getElementByClassName();
// const listItems = document.getElementsByClassName("list-items");

// console.log(listItems);


//getElementByTagName()
// const listItems = document.getElementsByTagName("li");

// console.log(listItems);

//querySelector -- ça récupère un seul élément
// const container = document.querySelector("div");

// console.log(container);


//querySelectorAll() --
// const listItems = document.querySelectorAll(".list-items")

// console.log(listItems);


//CSS

// const title = document.querySelector("#title-container")

// title.style.color = "purple";

// title.style.backgroundColor = "pink";

// console.log(title);


//quand on veut appliquer un style à un querySelectorAll()
//C-à-dire à toutes nos balises, IL FAUT OBLIGATOIREMENT BOUCLER 

//Syntaxe avec for of

// const listItems = document.querySelectorAll(".list-items");

// // for(let item of listItems){
// //     item.style.fontSize = "2rem";
// // }

// //Syntaxe classique
// for (let i = 0; i < listItems.length; i++){ //i sera toujours inférieur à length
//     listItems[i].style.fontSize = "2rem";
// }

// console.log(listItems);

//------------------------
//Comment créer un élément
//------------------------

// const ul = document.querySelector("ul");

// const li = document.createElement("li");

//ajouter un élément 

// ul.append(li); //append => ajouter 

// li.innerText = "Heartland";

// const firstListItems = document.querySelector(".list-items");

// console.log(firstListItems.innerContent) //pour afficher tous le text contenu dans les balises (avec les sauts de ligne)
// console.log(firstListItems.innerText) //pour afficher uniquement le text visible
//console.log(firstListItems.innerHTML) => //ATTENTION NE PAS UTILISER // affiche les balises => problème de sécurité



//------------------------
//Modifier les attributs et classes
//------------------------

// li.setAttribute("id", "list-items");

// li.setAttribute("style", "font-size: 2rem");

// li.removeAttribute("Style"); li.removeAttribute("id");

// li.classList.add("list-items");

// li.classList.contains("list-items");

// console.log(li.classList.contains("list-items"));

// li.remove(); //supprime toutes les modification dans ce cas Heartland


//------------------------
//Naviguer dans le DOM
//------------------------

// const ul = document.querySelector("ul") //séleectionner un élément

//console.log(ul.parentNode.parentNode);
//console.log(ul.parentElement.parentElement);

//Différence entre les deux

// const html1 = document.documentElement;

// console.log(html1.parentNode);
// console.log(html1.parentElement);


//naviguer vers un enfant

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

//2e syntaxe -- a utiliser

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


//ATTENTION avec la 1ère syntaxe les espaces et les sauts de ligne 
//sont considérés comme des noeuds les commantaires aussi.

// ul.firstElementChild.backgroundColor = "blue";

// ul.children[1].style.backgroundColor = "red";

// const li = document.querySelector('li');

// li.nextElementSibling.style.backgroundColor = "grey";


















































































