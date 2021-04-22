var pwd = document.getElementById('password')
var errorCheck = document.querySelector(".errorCheck")
const Sl = /[a-z]/

pwd.addEventListener('focus', ()=>{
    errorCheck.style.display = "block"
    if(RegExp(Sl).test(pwd.value)){
        errorCheck.
    }
})

pwd.addEventListener('blur', ()=>{
    errorCheck.style.display = "none"
})
