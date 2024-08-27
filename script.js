/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Luca Fedele <luca.fedele@divtec.ch>
 * @version 0.1 (Version actuelle)
 * @since 2024-08-27 (Date de création)
 */
// Détecte les erreurs dans le code
"use strict";
// Déclare lq variable msg
let msg = "Bonjour";
// Affiche le contenu de msg dans une alert box
console.log(msg);
// Récupère le premier h2 du document
// Compteur de capture
let compteur = 0;
// Récupère l'élèment avec l'identifiant
// Initialisation des constantes
const comtpeurEl = document.getElementById('compteur-el');
const capturerBtn = document.getElementById('capturer-btn');
const sauvegarderBtn = document.getElementById('sauvegarder-btn');
const sauvegardeEl = document.getElementById('sauvegarde-el');

// Fonction qui incrémente le compteur et mets à jours le texte du <h2>
function capturer() {
    compteur += 1;
    comtpeurEl.textContent = compteur;
    if (compteur < 5) {
        comtpeurEl.style.color = 'green';
    } else if (compteur < 10) {
        comtpeurEl.style.color = 'yellow';
    } else {
        comtpeurEl.style.color = 'red';
    }
}

function sauvegarder() {
    //sauvegardeEl.textContent += compteur + ' Pokémons | ';
    sauvegardeEl.textContent += ` ${compteur} Pokémons |`;
    // Sauvegarde l'historique des captures en local
    localStorage.setItem("captures", sauvegardeEl.textContent);
    compteur = 0;
    comtpeurEl.textContent = compteur;
    comtpeurEl.style.color = 'black';
}

// Écouter les événements et fais appelle à un callback
document.getElementById('capturer-btn').addEventListener('click', capturer);
document.getElementById('sauvegarder-btn').addEventListener('click', sauvegarder);
// Quand l'onglet du navigateur a fini de se charger
window.addEventListener('load', () => {
    sauvegardeEl.textContent = localStorage.getItem("captures") || "Mes captures : ";
});
