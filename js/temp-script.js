let arrayStars = document.querySelectorAll("i");
let arrayCards =document.querySelectorAll(".conteiner-rating");



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

document.querySelector(".conteiner-stars").addEventListener("mouseleave", ()=>{
    arrayStars.forEach(element => {
        element.classList.remove("yellow")
    })
})
