window.onload  = function(){
    var inputEmail = document.getElementById('email-box');
    var inputPassword = document.getElementById ('password-box');
    var messageAlert = document.getElementsByClassName ('alert-msg');
    var regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var inputSubmit = document.getElementById ('log-in');
    var contentBoxSubmit = document.getElementById('submit-box');
    var contentBoxSubmit1 = document.getElementById('submit-box1');
    var validateForm = document.getElementById('form');

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

    

    function myRequest () {

        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
        var emailValue = inputEmail;
        var passwordValue = inputPassword;

        fetch (url + '?email=' + emailValue + '&password=' + passwordValue)
        .then (function(response){
            return response.json();
        })
        .then (function(jsonResponse){
            alert (jsonResponse.msg);
            if (jsonResponse.success){
                validateForm[0].classList.add ('alert');
                messageAlert[0].innerHTML = inputEmail.value;
                messageAlert[1].innerHTML = inputPassword.value;
            } else {
                inputEmail.classList.add('blur');
                inputEmail.classList.remove('correct');
                messageAlert[0].add('error');
                inputPassword.classList.add('blur');
                inputPassword.classList.remove('correct');
                messageAlert[1].classList.add('error');
            }
        })
        .catch(function(error){
            console.log('error', error);
        })
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateEmail(inputEmail) && validatePassword(inputPassword)) {
            myRequest(emailValue, passwordValue, url);
        }
    })

    
    

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

        function validateSubmit() {
            var email = inputEmail.value;
            var password = inputPassword.value;
            
            if ((email.length != 0) && (password.length != 0)) {
                alert ('Login successfull');
                alert('Email: '+email+' Password: '+password+'');
            } else {
                alert('Validation was not success');
            }
        }
    
        inputSubmit.onclick = function() {
            validateSubmit();
        }
}

    

