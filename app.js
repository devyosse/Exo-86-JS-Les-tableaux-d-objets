/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}


/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [citroen, peugeot, ford], // Vos voitures dans cette propriété !
}



for(y = 0; y < voitures.collection.length; y++) {
    let para = document.getElementById('para');
    let span = document.createElement('span');
    span.style.color = voitures.collection[y].color;
    span.innerHTML = voitures.collection[y].color + ", ";
    voitures.collection[y].ouvrirPorte();
    para.appendChild(span);

}





// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.


