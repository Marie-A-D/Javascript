

let age
console.log("Bienvenue sur la carte avantage transport jeune");
age = prompt("Veuillez indiquer votre âge");

while (age <1 || age >90){
    console.log("Veuillez saisir un âge valide");
    age = prompt("Veuillez indiquer votre âge");
}

if(age < 18){
    console.log("Il faut avoir minimum 18 ans pour bénéficier de la carte avantage transport jeune");
}else if (age >= 18 && age <= 26){
    console.log("Tu peut bénéficier de la carte avantage transport jeune");
}

else {
    console.log("Il faut avoir maximum 26 pour bénéficier de la carte avantage transport jeune");
}





