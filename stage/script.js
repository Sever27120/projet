


function compterocuurenceville(jsonData,ville){
    let count=0;
}



// Parcours du tableau pour compter le nombre d'occurrences de la ville saisie
for (var i = 0; i < jsonData.length; i++) {
    if (jsonData[i].office === office) {
        count++;
    }
}

const villedemander=prompt("Veuillez entrer une ville");

const nombreoccurences = compterocuurenceville(jsondata,villedemander);
// Affichage du résultat
console.log(`Le nombre d'occurrences de la ville ${villedemander} dans le fichier JSON est : ${nombreoccurences}`);

