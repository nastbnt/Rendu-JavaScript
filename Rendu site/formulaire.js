let form=document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault();

    let errorContainer=document.querySelector(".message-error")
    let errorList=document.querySelector(".message-error ul")

    errorList.innerHTML=""
    errorContainer.classList.remove("visible")


    let email=document.querySelector("#email")
    if(email.value==""){
        errorContainer.classList.add("visible")
        email.classList.remove("green")

        let err=document.createElement("li")
        err.innerText="L'email n'est pas valide"
        errorList.appendChild(err)

    }else{
        email.classList.add("green")
    }


    let pseudo=document.querySelector("#pseudo")
    if(pseudo.value.length < 6){
        errorContainer.classList.add("visible")
        pseudo.classList.remove("green")

        let err=document.createElement("li")
        err.innerText="Le pseudo nécessite minimum 6 caractères"
        errorList.appendChild(err)
    }else{
        pseudo.classList.add("green")
    }


    let passCheck= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");

    let password=document.querySelector("#password")

    if(password.value.length < 10 || passCheck.test(password.value)==false){
        errorContainer.classList.add("visible")
        password.classList.remove("green")

        let err=document.createElement('li')
        err.innerText="Mot de passe pas assez ou pas de caractères spéciaux"
        errorList.appendChild(err)
    }else{
        password.classList.add("green")
    }

    let passwordInitial=document.querySelector("#password")
    let passwordRepeat=document.querySelector("#password2")

    if(passwordInitial.value != passwordRepeat.value){
        errorContainer.classList.add("visible")
        passwordRepeat.classList.remove("green")

        let err=document.createElement('li')
        err.innerText="Les MDP sont différents"
        errorList.appendChild(err)
    }else{
        passwordRepeat.classList.add("green")
    }
    

    let successContainer=document.querySelector(".message-succes")
    successContainer.classList.remove("visible")

    if(pseudo.classList.contains("green")&&email.classList.contains("green")&&password.classList.contains("green")&&passwordRepeat.classList.contains("green")){
        successContainer.classList.add("visible")
    }

})



