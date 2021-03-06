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



SCRIPT FIRST VERSION
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
 
SCRIPT SECOND VERSION
---------------------------------------------------------------------------

Find gateway navigation item for eventListener
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
*/

// Find gateway navigation items
const buttonsGateway = document.querySelectorAll('.gateways__item');

buttonsGateway.forEach(button => {
    button.addEventListener('click', (e) => {
        // Deleting and add active class
        document.querySelector('.gateways .active').classList.remove('active');
        e.currentTarget.classList.add('active');
        
        // Find all destinations
        const keepDestinations = document.querySelectorAll('.gateway-suggestions .destination');
        // Change datas from gateway.js
        for (let i = 0; i < keepDestinations.length; i++) {
            const gatewayId = gatewaysData.find( gatewayTable => gatewayTable.id === e.currentTarget.attributes.name.value);
            let getGatewayDatas = gatewayId.datas[i];
            let findDestination = document.querySelector('.gateway-suggestions').children[i].children;
    
            findDestination[0].textContent = getGatewayDatas.city;
            findDestination[1].textContent = getGatewayDatas.region;
        }
    })
});

// Sticky nav bar on scroll
const findHeader = document.querySelector('.header');
const findBottomNav = document.querySelector('.bottom-nav');

window.onscroll = function() {
    if (this.oldScroll < this.scrollY) {
        findHeader.classList.add('scroll-bar');
        findBottomNav.classList.remove('scroll');
    } else if(this.oldScroll < 160) {
        findHeader.classList.remove('scroll-bar');
    } else if (this.oldScroll > this.scrollY){
        findBottomNav.classList.add('scroll');
    }

    this.oldScroll = this.scrollY;
}

// Find 
const sliders = document.querySelectorAll('.slider-nav');

// Finding if user scroll on left or right then indent scroll data
const scrollTo = (block, direction) => {
    
    const scrollGap = (scrollWidth) =>{
        scrollWidth = block.scrollWidth;

        if (block.scrollWidth > 600){
            scrollWidth = (document.body.clientWidth / block.childElementCount) * 2;
        } else{
            scrollWidth = (document.body.clientWidth / block.childElementCount) * 0.40;
        }

        return scrollWidth
    }

    
    if (direction === "left") {
        block.scrollLeft -= scrollGap();
    } else if (direction === "right") {
        block.scrollLeft += scrollGap();
    }
}

// Scrolling depends on block 
const sliderScroll = (parent, direction) => {
    const blockToSlide = parent.querySelector('.blockToSlide');

    if (parent.className === "idea") {
        scrollTo(blockToSlide, direction);
    } else if (parent.className === "next-gateway") {
        scrollTo(blockToSlide, direction);
    }
}


// Listeners for each slider 
sliders.forEach(element => {
    const sliderParent = element.parentElement.parentElement;
    const blockToSlide = sliderParent.querySelector('.blockToSlide');

    element.addEventListener('click', (e) => {
        const direction = e.target.attributes.name.value;
        sliderScroll(sliderParent, direction);
    })

    blockToSlide.addEventListener('scroll', (e) => {
        const scrollPosition = e.target.scrollLeft;

        sliderParent.querySelector('.slider-nav').classList.remove('disabledLeftNav');

        if (scrollPosition === 0) {
            sliderParent.querySelector('.slider-nav').classList.add('disabledLeftNav');
        }
    })
});


// V1
// ideaButtonleft.addEventListener('click', () => {
//     test.scrollLeft -= 300;
// });

// ideaButtonright.addEventListener('click', () => {
//     test.scrollLeft += 300;
// });


// V2
// const ideaSliderNav = document.querySelector(".idea .slider-nav");

// ideaSliderNav.addEventListener('click', (e) => {
//     const scrollableBlock = document.querySelector(".idea .idea__cards-block");
    
//     const scrollTo = (direction) => {
//         direction = e.target.attributes.name.value;

//         if (direction === "scrollLeft") {
//             scrollableBlock.scrollLeft -= 300;
//         } else if (direction === "scrollRight") {
//             scrollableBlock.scrollLeft += 300;
//         }
//     }
// })