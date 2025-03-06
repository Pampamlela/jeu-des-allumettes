
/*Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.*/


let allumettes = 50 // on déclare le nb d'allumettes au début du jeu

function prendreAllumettes(allumettesPrises){
    if(allumettes != 0 && allumettesPrises >=1 && allumettesPrises <7 ){ //conditions pour jouer
        allumettesPrises = prompt("Prenez 1 à 6 allumettes") // on dmd au joueur de prendre des allumettes
        return allumettesRestantes = allumettes - allumettesPrises // calcul des allumettes restantes
    }else{
        alert("Fin du jeu") // il n'y plus d'allumettes ou le joueur ne remplit pas les conditions
    }
    
}

console.log(prendreAllumettes())


/*Demander a l'utilisateur combien d'allumettes il souhaite retirer
 tant qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ.

*/
