window.onload  = function(){
    var inputEmail = document.getElementById('email-box');
    var inputPassword = document.getElementById ('password-box');
    var messageAlert = document.getElementsByClassName ('alert-msg');
    var regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    function validateEmail() {
        if (inputEmail.value.match(regExp)) {
            messageAlert[0].classList.add ('correct');
            messageAlert[0].classList.remove ('invalid');
            messageAlert[0].innerHTML = 'Valid email';
        } else if (!inputEmail.value.match (regExp)) {
            messageAlert[0].classList.add ('invalid');
            messageAlert[0].classList.remove ('correct');
            messageAlert[0].innerHTML = 'Must enter a valid email';
        }
    }
    
    inputEmail.onblur = function() {
        validateEmail();
    }

    inputEmail.onfocus = function() {
        messageAlert[0].classList.remove ('correct');
        messageAlert[0].classList.add ('invalid');
        messageAlert[0].innerHTML = '';
    }

}

