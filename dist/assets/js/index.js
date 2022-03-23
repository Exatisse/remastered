const keep = document.querySelector('.suggestions');
const keepRegion = document.querySelector('.suggestions .suggestions__link .region');

// Ici je récupère la data dans mon objet présent dans gateways.js 
const changeData = () => {
    keepRegion.textContent = test.seaSide[0].region
}

// Ici les datas dont j'ai besoins dans mon DOM (tous les éléments city, region présent dans le html)
console.log(keep);
console.log(keep.children[0]);
console.log(keep.children[0].children[0]);
console.log(keepRegion);

changeData();

/*  Logique
*   Tant que - toutes les villes et regions n'ont pas été changé - alors
*       Trouver la ville - Changer la ville avec celle contenu dans l'objet
*       Trouver la region - Changer la region avec celle contenu dans l'objet
*/