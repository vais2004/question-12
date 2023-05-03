const input = document.querySelector("#password")
const submitButton = document.querySelector("#submit")
const output = document.querySelector("#output")
let password =''
 
submitButton.disable = true

function checkPasswordLength(password){
    if(password.length < 10){
        output.innerText = 'password length should be greater than 10'
        input.style.backgroundColor = 'red'
    }else{
        output.innerText = 'success'
        submitButton.disable = false
        input.style.backgroundColor = 'green'
    }
}

function submitHandler(){
    if(!submitButton.disable){
        output.innerText = 'your password can be accepted'
    }
}

input.addEventListener('input', (e) => checkPasswordLength(e.target.value))
submitButton.addEventListener('click', submitHandler)











