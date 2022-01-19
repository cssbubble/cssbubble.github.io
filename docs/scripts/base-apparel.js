

const baseForm = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');

baseForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    checkInput();
});

function checkInput(){
    const eValue = email.value.trim(); 
    if(eValue === ''){
        email.classList.add('error');
        emailError.classList.remove('hidden')
        emailError.classList.add('error-msg');
    }else {
        email.classList.add('success');
        emailError.classList.add('hidden')
        email.classList.remove('error');
    }
}

function isEmail (email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}