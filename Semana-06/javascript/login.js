window.onload  = function(){
    var inputEmail = document.getElementById('email-box');
    var inputPassword = document.getElementById ('password-box');
    var messageAlert = document.getElementsByClassName ('alert-msg');
    var regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var inputSubmit = document.getElementById ('log-in');
    var contentBoxSubmit = document.getElementById('submit-box');
    var contentBoxSubmit1 = document.getElementById('submit-box1');

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

    function validatePassword () {
        var alphaNumeric = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var passwordValue = inputPassword.value;
        var isAlphaNumeric = true;
        var onlyNumbers = true;
        var onlyLetters = true;
    
        passwordValue.split('').forEach(function(letter){
            if (alphaNumeric.indexOf(letter) == -1) isAlphaNumeric = false;
            if (numbers.indexOf(letter) == -1) onlyNumbers = false;
            if (letters.indexOf(letter) == -1) onlyLetters = false;
        })
    
        if (isAlphaNumeric && !onlyNumbers && !onlyLetters && passwordValue.length >=8) {
            messageAlert[1].classList.add('correct');
            messageAlert[1].innerHTML = ' ';
        } else if (inputPassword.value.length == 0){
            messageAlert[1].classList.add('invalid');
            messageAlert[1].innerHTML = 'Fiels are required';
            messageAlert[1].style = "color: #ff0000";
        } else {
            messageAlert[1].classList.add('invalid');
            messageAlert[1].innerHTML = 'Must enter a valid password';
            messageAlert[1].style = "color: #ff0000";
        }
    }
    
        inputPassword.onblur = function(){
            validatePassword();
        }
        
        inputPassword.onfocus = function(){
            messageAlert[1].classList.remove('invalid');
            messageAlert[1].classList.remove('correct');
            messageAlert[1].innerHTML = ' ';
        }

    function actionSubmit() {

        if (messageAlert[0].classList.contains('correct')) {
            contentBoxSubmit.innerHTML = '<span>Email: <span>' +inputEmail.value;
            contentBoxSubmit.style = "color: #373867";
        } else if (messageAlert[0].classList.contains('invalid')) {
            contentBoxSubmit.innerHTML = '<span>Invalid format for password<span>';
            contentBoxSubmit.style = "color: #ff0000";
        }

        if (messageAlert[1].classList.contains('correct')) {
            contentBoxSubmit1.innerHTML = '<span>Password: <span>' +inputPassword.value;
            contentBoxSubmit1.style = "color: #373867";
        } else if (messageAlert[1].classList.contains('invalid')) {
            contentBoxSubmit1.innerHTML = '<span>Invalid format for password<span>';
            contentBoxSubmit1.style = "color: #ff0000";
        }
    }

    inputSubmit.onclick = function  (e) {
        actionSubmit();
        e.preventDefault();
    }
}

