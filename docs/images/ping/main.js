

function validate(ev) {
    //console.log(ev);
    ev.preventDefault();
    var mail = document.getElementById("email");
    var error = document.getElementById("error");
    var regx = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    if(regx.test(mail.value)) {
        error.style.display = 'none';
        mail.style.border = '1px solid #666666';
        return true;
    } else {
        mail.style.border =  '1px red solid';
        error.style.display = 'block';
        return false;
    }

}

