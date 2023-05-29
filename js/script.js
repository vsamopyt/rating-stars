
let arrayCards =document.querySelectorAll(".conteiner-rating");
let arrayConteinerStars =document.querySelectorAll(".conteiner-stars");

// WORKING AREA
// to loop through cards
for (let i =0; i<arrayCards.length; i++ ) {
    arrayCards[i].addEventListener("mouseover", ()=>{
        let classArrayCard = arrayCards[i].getAttribute("class").split(" ").join(".");
        let arrayStars = document.querySelectorAll(`.${classArrayCard} i`);
        let blockStars = arrayConteinerStars[i];
        setRatings(arrayStars)
        delRatings (blockStars,arrayStars)
    })
}

// FUNCTIONS
//for looping through stars (mouseover), chosing rating with (click)
function setRatings(arrayStars) {
    for (let i=0; i<arrayStars.length; i++) {
    arrayStars[i].addEventListener("mouseover", (e)=>{
        arrayStars.forEach(element => {
            element.classList.remove("yellow")
       });

        for(let k=0; k<=i; k++) { 
            arrayStars[k].classList.add("yellow")
        } 
    })

    arrayStars[i].addEventListener("click", ()=>{
        arrayStars.forEach(element => {
            element.classList.remove("data-recorded")
       });
        arrayStars.forEach((element,index) => {
              if(index<=i) {
                  element.classList.add("data-recorded")
              }
          })
        
    })
}
}

// to set stars to default if you leave block stars without chosing rating (click)
function delRatings (blockStars,arrayStars) {
    blockStars.addEventListener("mouseleave", ()=>{
        arrayStars.forEach(element => {
            element.classList.remove("yellow")
        })
    })
}