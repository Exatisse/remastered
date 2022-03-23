/*
ENSEMBLE DE CE QUE J'AI TRY POUR TROUVER LA SOLUTION
---------------------------------------------------------------------------



LOGIQUE
---------------------------------------------------------------------------
Tant que - toutes les villes et regions n'ont pas été changé - alors
    Trouver la ville - Changer la ville avec celle contenu dans mon tableau
    Trouver la region - Changer la region avec celle contenu dans mon tableau



LES RECHERCES DE DONNES GENERE PAR LE DOM DONT J'AI BESOINS + ESSAIS
---------------------------------------------------------------------------
const keepGateway = document.querySelector('.gateway-suggestions');
const keepGatewayChildren = keepGateway.children;
const keepRegion = document.querySelector('.gateway-suggestions .gateway-suggestions__link .region');
const keepTest = document.querySelector('.gateway-suggestions .destination');
const button = document.querySelector('.next-gateway .gateway-nav');



DEBUT DU TRAITEMENT DES DONNEES FROM
---------------------------------------------------------------------------
const changeData = () => {
    keepRegion.textContent = gatewaysDatas.seaSide[0].region
}

let testChange = (dataIndex) =>{
    keepTest.children[0].textContent = gatewaysDatas.seaSide[dataIndex].region;
    keepTest.children[1].textContent = gatewaysDatas.seaSide[dataIndex].city;
}



FIRST TRY
---------------------------------------------------------------------------
findGatewayNavigation.addEventListener('click', () =>{
    const findButton = document.querySelectorAll('.gateway-nav__item');
    
    for (let i = 0; i < findButton.length; i++) {
        let findButtonName = findButton[i].attributes.name.value;

        let activeState = () =>{
            document.querySelector('.gateway-nav .active').classList.remove('active');
            findButton[i].classList.add('active')
        };

        findButton[i].addEventListener('click', () => {
            switch (findButtonName) {
                case "seaSide":
                    activeState();
                    changeAllDestination("seaSide");
                    break;

                case "winterSport":
                    activeState();
                    changeAllDestination("winterSport");
                    break;

                case "montain":
                    activeState();
                    changeAllDestination("montain");
                    break;

                case "populary":
                    activeState();
                    changeAllDestination("populary");
                    break;
                default:
                    break;
            }
        })
    }
});
*/

// Find gateway navigation item for eventListener
const findButton = document.querySelectorAll('.gateway-nav__item');

// Function use to find and change all link's data in gateway propositions
let changeAllDestination = (section) => {
    const keepDestinations = document.querySelectorAll('.gateway-suggestions .destination');

    for (let i = 0; i < keepDestinations.length; i++) {
        let findDestinations = document.querySelector('.gateway-suggestions').children[i].children;
        let getGatewayDatas = gatewaysDatas[section][i];

        findDestinations[0].textContent = getGatewayDatas.city;
        findDestinations[1].textContent = getGatewayDatas.region;
    }
};

// Loop to find which gateway navigation item is clicked and change all destination (function just on top)
for (let i = 0; i < findButton.length; i++) {
    findButton[i].addEventListener('click', () => {
        let findButtonName = findButton[i].attributes.name.value;

        let activeState = () =>{
            document.querySelector('.gateway-nav .active').classList.remove('active');
            findButton[i].classList.add('active')
        };

        switch (findButtonName) {
            case "seaSide":
                activeState();
                changeAllDestination("seaSide");
                break;

            case "winterSport":
                activeState();
                changeAllDestination("winterSport");
                break;

            case "montain":
                activeState();
                changeAllDestination("montain");
                break;

            case "populary":
                activeState();
                changeAllDestination("populary");
                break;
            default:
                break;
        }
    })
};