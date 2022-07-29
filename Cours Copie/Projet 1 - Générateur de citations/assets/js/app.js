//-----------------------------
//Projet - Générateur de citations
//-----------------------------

//ce projet nécessite des connaissances sur :
//querySelector()
//addEventListener
//L'objet Math
//innerText-textContent


//-----------------------------
//##############################
//-----------------------------


const btn = document.querySelector("#new-citation");
const citation = document.querySelector(".citation");
const auteur = document.querySelector(".auteur");

const citations = [

    {
        citation : `"Dans une certaine mesure, si vous avez vu un bidonville, vous les avez tous vus."`, //il faut mettre des virgules
        auteur : `Spiro Théodore Agnew`, 
        img: "https://images.pexels.com/photos/1131407/pexels-photo-1131407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }, //CE LIEN EST BON

     {
    citation: `"Tout le monde ne fait pas confiance aux peintures, mais les gens croient aux photographies."`,
    auteur:  `Ansel Adams`,
    img: "https://images.pexels.com/photos/1477430/pexels-photo-1477430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }, //CE LIEN EST BON

  {
    citation: `"Apprendre, c'est découvrir ce que vous savez déjà. Faire, c'est démontrer que vous le savez. Enseigner, c'est rappeler aux autres qu'ils le savent tout aussi bien que vous. Vous êtes tous des apprenants, des exécutants et des enseignants."`,
    auteur:  `Richard David Bach`,
    img: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //CE LIEN EST BON
},  {
    citation: `"J'aime mieux être exposé aux inconvénients d'une trop grande liberté qu'à ceux d'un trop petit degré de liberté."`,
    auteur:  `Thomas Jefferson`,
    img: "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //CE LIEN EST BON
},  {
    citation: `"Une hirondelle ne fait pas un été, mais un écheveau d'oies, fendant le brouillard du dégel de mars, c'est le printemps."`,
    auteur:  `Aldo Leopold`,
    img: "https://images.pexels.com/photos/721993/pexels-photo-721993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //CE LIEN EST BON
},  {
    citation: `"Lorsque je vais dans mon jardin avec une bêche et que je creuse un lit, je ressens une telle exaltation et une telle santé que je découvre que je me suis trompé pendant tout ce temps en laissant les autres faire pour moi ce que j'aurais dû faire de mes propres mains."`,
    auteur:  `Ralph Waldo Emerson`,
    img: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }//CE LIEN EST BON
];

btn.addEventListener("click", () =>{

let random = Math.floor(Math.random() * citations.length);

citation.innerText = citations[random].citation;
auteur.innerText = citations[random].auteur;
document.body.style.background = `url(${citations[random].img}) no-repeat center /cover`;

})


























































































































