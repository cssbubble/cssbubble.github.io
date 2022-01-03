const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const fError = document.getElementById('fname-error')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
}) ;

const setError = (element, message) => {
    const error = element.parentElement;
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fnameValue === ''){

    }
}
    // let messages = [];

    // if (fname.value === '' || fname.value == null){
    //     messages.push ("first name cannot be empty");
    // }
    
    // if (messages.length > 0){
    //     e.preventDefault();
    //     fError.innerText = messages.join(', ');
    // }
    
