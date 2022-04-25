window.onload = function () {
    var email = document.getElementById('email-box');
    var alertEmail = document.getElementsByClassName('mail-alert');
    var password = document.getElementById('password-box');
    var alertPassword = document.getElementsByClassName('password-alert');
    var button = document.getElementById('log-in');
    var backButton = document.getElementById('goback-button');
    var emailChecked = document.getElementById('mail-checked');
    var passwordChecked = document.getElementById('password-checked');
    
        email.addEventListener('blur', function(){
        var emailInput = email.value;
        var RegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (emailInput.match(RegExp)){
            email.classList.add('valid');
        } else{
            email.classList.remove('valid');
            email.classList.add('invalid');
            alertEmail.style.color = 'red';
            alertEmail.innerHTML = '<span>Must enter a valid email</span>';
        }
    });

    email.addEventListener('focus', function () {
        alertEmail.classList.remove('invalid');
        alertEmail.classList.remove('valid');
        alertEmail.style.color = "white";
    });

    password.addEventListener('blur', function(){
        var allowed = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var passwordValue = password.value;
        var isAlphanumeric = true;
        var onlyNumbers = true;
        var onlyLetters = true;
    
    passwordValue.split('').forEach(letter=>{
        if (allowed.indexOf(letter) == -1) isAlphanumeric = false;
        if (numbers.indexOf(letter) == -1) onlyNumbers = false;
        if (letters.indexOf(letter) == -1) onlyLetters = false;
    });
    
    if (isAlphanumeric && !onlyNumbers && !onlyLetters){
        password.classList.add('valid');
    } else {
        password.classList.add('invalid');
        alertPassword.style.color = '#ff0000';
        alertPassword.innerHTML = '<span>Must enter a valid password</span>';
    }
    
    password.addEventListener('focus', function(){
        alertPassword.classList.remove('invalid');
        alertPassword.classList.remove('valid');
        alertPassword.style.color = "white";
    });

    button.addEventListener('click', function(){
        var emailValue = email.value;
        var passwordValue = password.value;
        document.getElementById('overlay').style.display = 'block';
        if (email.classList.contains('valid')){
            emailChecked.innerHTML = '<span>Email: </span>' + emailValue;
        } else if (email.classList.contains('invalid')){
            emailChecked.innerHTML = '<span>Email: Incorrect email</span>';
        };

        if (password.classList.contains('valid')){
            passwordChecked.innerHTML = '<span>Password: </span>' + passwordValue;
        }else if (password.classList.contains('invalid')){
            passwordChecked.innerHTML = '<span>Password: Incorrect password</span>';
        };
    });

    backButton.addEventListener('click', function(){
        document.getElementById('overlay').style.display = 'none';
    });
}