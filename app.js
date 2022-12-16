const emailInput= document.querySelector("#email")
const errorMsg=document.querySelector("#primary_errorMsg")
const button=document.querySelector("#button")
const validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

button.addEventListener("click", ()=>{
    if(email.value===""){
        email.style.borderColor="hsl(354, 100%, 66%)";
        primary_errorMsg.textContent="Whoops! It looks like you forgot to add your email"
        primary_errorMsg.style.display="block";
    }else if(email.value.match(validEmail)){
        email.style.borderColor="hsl(223, 100%, 88%)";
        primary_errorMsg.style.display="none"
    }else if(!email.value.match(validEmail)){
        email.style.borderColor="hsl(354, 100%, 66%)";
        primary_errorMsg.style.display="block";
        primary_errorMsg.textContent="Please provide a valid email address"
        
    }
})