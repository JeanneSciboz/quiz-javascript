// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE:C'est un conteneur qui permet de stocker et réutiliser des données dans un programme.
// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Jeanne";
// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 19;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: <div>
// - Classe(s): class="card"
// - Attribut(s): type="text"
// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: Une classe peut être utilisée sur plusieurs éléments pour les styliser de la même manière un ID est unique à un seul élément.
// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: La méthode sert a séléctionner et renvoier le premier élément du DOM correspondant au sélecteur CSS spécifié
// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
let cardContent = document.querySelector(".card-content");
// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.
cardContent.classList.add("highlight");
// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).
card.getAttribute("Créer votre mot de passe");
console.log(placeholder);
// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE:C'une fonction qui attend et réagit à des événements spécifiques sur un élément du DOM.
// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
// 11.1 Sélectionner l'élément HTML <button>
let button = document.querySelector("#card-btn");
button.addEventListener("click", function () {
  let toggleText = document.querySelector("#toggle-text");
  toggleText.classList.toggle("hide");
});
