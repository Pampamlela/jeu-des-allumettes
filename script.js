/*On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, . . .). Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

Contraintes:

    Langage : JS ou Python.
    Suivez les étapes.
    Une fonctionnalité = une fonction.

Étape 1

Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

Pour rappel, un nom de fonction doit décrire clairement ce que fait celle-ci.
Étape 2

Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. 
Pour rappel, on a 50 allumettes au départ.
Étape 3

Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.

Ajouter a votre jeu la notion de victoire.*/

//Etape 1

let allumettes = 50
let allumettesChoisies

function prendreAllumettes (allumettesChoisies){
    // Etape 2 & 3
    allumettesChoisies = window.prompt("Allez, prend 1 ou 6 allumettes") // on dmd de choisir
    if(allumettes !== 0 && allumettesChoisies > 0 && allumettesChoisies < 7){ // conditions de jeu
    console.log(allumettesChoisies)
    allumettes -= allumettesChoisies //calcul du reste
    console.log(allumettes)
    }else{
    allumettesChoisies=window.prompt("Entre 1 et 6 stp") // les conditions ne sont pas remplies on redmd
    console.log(allumettesChoisies)
    }
}
//prendreAllumettes(allumettesChoisies)

//Etape 3
function jouer(){
    console.log("ça joue ?")
    if (allumettes > 0) {
        prendreAllumettes(allumettesChoisies)

    }else{
        window.prompt("Fin")
    }

}
jouer()







/*Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

Pour rappel, un nom de fonction doit décrire clairement ce que fait celle-ci.

/*Demander a l'utilisateur combien d'allumettes il souhaite retirer
 tant qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ.*/

//let allumettes = 50 // condition de début du jeu
//let allumettesPrises = window.prompt(" 1 ou 6")
/*let allumettes = 50
let allumettesPrises = window.prompt(" 1 ou 6")

function prendreAllumettes(allumettesPrises){
    //let allumettesPrises = window.prompt(" 1 ou 6")
    if(allumettes != 0 && allumettesPrises >=1 && allumettesPrises <7 ){ //conditions pour jouer
        
        //return console.log(allumettesPrises)
        return console.log(allumettes -= allumettesPrises) // calcul des allumettes restantes 
    }else{
        window.prompt("1 ou 6") // il n'y plus d'allumettes ou le joueur ne remplit pas les conditions
    }
    console.log(allumettesPrises)
}
prendreAllumettes(allumettesPrises)

function calculAllumettesRestantes (){
    allumettes -= allumettesPrises
}

console.log(calculAllumettesRestantes)

function gamePlay(){

}
/*Étape 3

Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.

Ajouter a votre jeu la notion de victoire. = 0 FIN
Étape 4

Rajouter un 2eme joueur à votre jeu.
Étape 5

Proposer un mode multi-joueur. Demander à l’utilisateur, combien il y a de joueur et gérer la partie en conséquence.
Étape 6

Libre à vous de faire une interface graphique à votre goût !

Tu as aimé faire cet exercice ou tu as des retours à nous faire ? Clique ici !*/

