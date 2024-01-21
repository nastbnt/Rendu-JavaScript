document.addEventListener('DOMContentLoaded', function(){

    const swiper = new Swiper(".mon-slider",{
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        pagination: {
        el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000
        }
    })
})

//dark mode

let sombre=document.querySelector(".sombre")
let body=document.querySelector("body")
let footer=document.querySelector("footer")

sombre.addEventListener("click",()=>{
    if(body.classList.contains("dark") && footer.classList.contains("dark")){
        body.classList.remove("dark")
        footer.classList.remove("dark")
        
    }else{
        body.classList.add("dark")
        footer.classList.add("dark")
  
    }
})