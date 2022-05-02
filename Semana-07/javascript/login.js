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
            messageAlert[0].innerHTML = 'Fields are requiered';
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

        
    function toLogin (emailValue, passwordValue) {

        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
        fetch (url + '?email=' + emailValue + '&password=' + passwordValue)
        .then (function(response){
            return response.json();
        })
        .then (function(jsonResponse){
            alert (jsonResponse.msg);
            if (jsonResponse.success){
                messageAlert[0].innerHTML = inputEmail.value;
                messageAlert[1].innerHTML = inputPassword.value;
            } else {
                messageAlert[0].classList.add ('invalid');
                messageAlert[0].classList.remove ('correct');
                messageAlert[0].innerHTML = 'Must enter a valid email';
                messageAlert[1].classList.add('invalid');
                messageAlert[1].classList.remove('correct');
                messageAlert[1].innerHTML = 'Must enter a valid password';
            }
        })
        .catch(function(error){
            console.log('error', error);
        })
    }

    inputSubmit.onclick= function() {
        toLogin(inputEmail.value, inputPassword.value);
    }
}

    

