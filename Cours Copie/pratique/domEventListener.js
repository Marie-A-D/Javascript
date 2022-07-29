//---------------------------
//Event Listeners
//---------------------------

//ajouter un évennement d'écoute
//addEnventListeners('Click', function () {})

// const btn2 = document.querySelector(".btn-2");

// btn2.addEnventListener('Click', () =>{
//     alert("J'aime manipuler le DOM !");
// })

//mouseover

// const changerBackground = document.querySelector(".box3");

// function changerBgColor(){
//     changerBackground.style.changerBackgroundColor = "red";

// }

// function retirerBgColor(){
//     changerBackground.style.changerBackgroundColor = "transparent";
// }

// changerBackground.addEventListener("mouseover", changerBgColor)
// changerBackground.addEventListener("mouseout", retirerBgColor)

// Deuxième exemple : afficher du contenu masquer

const revelerBtn = document.querySelector(".reveler-btn");
const contenuMasque = document.querySelector(".contenu-masque");

function revelerContenu(){
    //Syntaxe classique 

    // if(contenuMasque.classList.contains ('contenu-masque')){
    //     //ça m'affiche le texte caché
    //     contenuMasque.classList.remove("contenu-masque");

    // }else{
    //     //ça masque le texte
    //     contenuMasque.classList.add("contenu-masque");
    // }
    //syntaxe: opération terniaire
contenuMasque.classList.contains('contenu-masque') ?
contenuMasque.classList.remove("contenu-masque") :
contenuMasque.classList.add("contenu-masque") 
    //Version optimisée
    contenuMasque.classList.toggle("contenu-masque")
}

revelerBtn.addEventListener("click", revelerContenu);
revelerBtn.style.color = "red";

// revelerBtn.addEventListener("click", (e)=>{
//     e.preventDefault();
    

// })


























