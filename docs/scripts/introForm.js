const form = document.getElementById('form');
const firstName = document.getElementById('fName');
const firstError = document.getElementById('first-name-error')
const lastName = document.getElementById('lName');
const lastError = document.getElementById('last-name-error')
const email = document.getElementById('email');
const emailError = document.getElementById('email-error')
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error')

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    checkInputs();
    success(firstName, lastName, email, password);
});

function checkInputs(){
    const fValue = firstName.value.trim(); 
    const lValue = lastName.value.trim(); 
    const eValue = email.value.trim(); 
    const pValue = password.value.trim(); 

    if(fValue === ''){
        firstName.classList.add('error');
        firstError.classList.remove('hidden')
        firstError.classList.add('error-msg');
    } else {
        firstName.classList.add('success');
        firstError.classList.add('hidden');
        firstName.classList.remove('error');
    }

    if(lValue === ''){
        lastName.classList.add('error');
        lastError.classList.remove('hidden')
        lastError.classList.add('error-msg');
    } else {
        lastName.classList.add('success');
        lastError.classList.add('hidden')
        lastName.classList.remove('error');
    }

    if(eValue === ''){
        email.classList.add('error');
        emailError.classList.remove('hidden')
        emailError.classList.add('error-msg');
    }else {
        email.classList.add('success');
        emailError.classList.add('hidden')
        email.classList.remove('error');
    }

    if(pValue === ''){
        password.classList.add('error');
        passwordError.classList.remove('hidden')
        passwordError.classList.add('error-msg');
    }else {
        password.classList.add('success');
        passwordError.classList.add('hidden')
        password.classList.remove('error');
    }

    // if(fValue === ''){
    //     setErrorFor(firstName, 'First name can not be empty')
    // } else {
    //     setSuccessFor(firstName);
    // } 

    // if(lValue === ''){
    //     setErrorFor(lastName, 'Last name can not be empty')
    // } else {
    //     setSuccessFor(lastName);
    // }

    // if(!isEmail (eValue)){
    //     setErrorFor(email, 'Looks like this is not an email')
    // } else {
    //     setSuccessFor(email);
    // }

    // if(pValue === ''){
    //     setErrorFor(password, 'Password can not be empty')
    // } else {
    //     setSuccessFor(password);
    // }

}

// function setErrorFor(input, message){
//     const formControl = input.parentElement; 
//     const info = formControl.querySelector('p');
//     info.innerText = message;
//     const img = formControl.querySelector('img');

//     input.className = 'w-full border-red-500 p-4 rounded-lg shadow-sm focus:outline-none focus:accent-intro-form-accent focus:ring-1 focus:ring-intro-form-accent';
//     // img.className = 'absolute right-2 top-4 bg-no-repeat';
//     info.className = 'text-xs text-intro-form-red text-right mt-2 italic'
// }

// function setSuccessFor(input){ 
//     const formControl = input.parentElement; 
//     const info = formControl.querySelector('p');
//     info.innerText = message;
//     const img = formControl.querySelector('img');

//     input.className ='w-full border-green-500 border-2 p-4 rounded-lg shadow-sm focus:outline-none focus:accent-intro-form-accent focus:ring-1 focus:ring-intro-form-accent';
//     img.className = 'hidden';
//     info.className = 'hidden';   
// }

function isEmail (email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

