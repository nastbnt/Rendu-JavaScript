console.log("load")
let li=document.querySelectorAll(".tab")
console.log(li)
let div=document.querySelectorAll("div")

li.forEach((elem)=>{
    elem.addEventListener("click",() =>{
        console.log(elem)
        li.forEach((elemtemp)=>{
            elemtemp.classList.remove("tab-active")
        })
        div.forEach((elemtemp)=>{
            elemtemp.classList.remove("active")
        })
        elem.classList.add("tab-active")
        if(elem.classList.contains("tab-a")){
            let a= document.querySelector(".a")
            a.classList.add("active")
        }
        if(elem.classList.contains("tab-b")){
            let a= document.querySelector(".b")
            a.classList.add("active")
        }
        if(elem.classList.contains("tab-c")){
            let a= document.querySelector(".c")
            a.classList.add("active")
        }
   })
})