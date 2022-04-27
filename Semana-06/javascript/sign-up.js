    var inputName = document.getElementById('name');
    var inputLastName = document.getElementById('last-name');
    var inputDni = document.getElementById('dni');
    var inputDateOfBirth = document.getElementById('date-of-birth');
    var inputPhoneNumber = document.getElementById('telephone');
    var inputAddress = document.getElementById('address');
    var inputCity = document.getElementById('city');
    var inputPostalCode = document.getElementById('postal-code');
    var inputMail = document.getElementById('email');
    var inputPsw = document.getElementById('password');
    var inputRepeatPassword = document.getElementById('repeat-password');
    var errorMessage = document.getElementsByClassName('error-msg');
    var regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var inputButton = document.getElementById('login-submit');

    function validateName () {
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var nameValue = inputName.value;
        var onlyNumbers = true;
        var onlyLetters = true;

        nameValue.split('').forEach(function(letter){
            if (numbers.indexOf(letter) == -1) onlyNumbers = false;
            if (letters.indexOf(letter) == -1) onlyLetters = false;
        });

        if (!onlyNumbers && onlyLetters && nameValue.length > 3) {
            errorMessage[0].classList.add('correct');
            errorMessage[0].innerHTML = ' ';
        } else if (inputName.value.length == 0){
            errorMessage[0].classList.add('invalid');
            errorMessage[0].innerHTML = 'Must enter a valid name';
            errorMessage[0].style = "color: #ff0000";
        } else {
            errorMessage[0].classList.add('invalid');
            errorMessage[0].innerHTML = 'Must enter more than 3 characteres';
            errorMessage[0].style = "color: #ff0000";
        }
    };

    inputName.onblur = function(){
        validateName();
    }

    inputName.onfocus = function(){
        errorMessage[0].classList.remove('invalid');
        errorMessage[0].classList.remove('correct');
        errorMessage[0].innerHTML = ' ';
    }

    function validateSurname () {
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var surnameValue = inputLastName.value;
        var onlyNumbers = true;
        var onlyLetters = true;

        surnameValue.split('').forEach(function(letter){
            if (numbers.indexOf(letter) == -1) onlyNumbers = false;
            if (letters.indexOf(letter) == -1) onlyLetters = false;
        });

        if (!onlyNumbers && onlyLetters && surnameValue.length > 3) {
            errorMessage[1].classList.add('correct');
            errorMessage[1].innerHTML = ' ';
        } else if (inputLastName.value.length == 0){
            errorMessage[1].classList.add('invalid');
            errorMessage[1].innerHTML = 'Must enter a valid surname';
            errorMessage[1].style = "color: #ff0000";
        } else {
            errorMessage[1].classList.add('invalid');
            errorMessage[1].innerHTML = 'Must enter more than 3 characteres';
            errorMessage[1].style = "color: #ff0000";
        }
    }

    inputLastName.onblur = function(){
        validateSurname();
    }

    inputLastName.onfocus = function(){
        errorMessage[1].classList.remove('invalid');
        errorMessage[1].classList.remove('correct');
        errorMessage[1].innerHTML = ' ';
    }

    function validateId () {
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var idValue = inputDni.value;
        var onlyNumbers = true;
        var onlyLetters = true;

        idValue.split('').forEach(function(letter){
            if (numbers.indexOf(letter) == -1) onlyNumbers = false;
            if (letters.indexOf(letter) == -1) onlyLetters = false;
        });

        if (onlyNumbers && !onlyLetters && idValue.length > 7) {
            errorMessage[2].classList.add('correct');
            errorMessage[2].innerHTML = ' ';
        } else if (inputDni.value.length == 0){
            errorMessage[2].classList.add('invalid');
            errorMessage[2].innerHTML = 'Fiels are required';
            errorMessage[2].style = "color: #ff0000";
        } else {
            errorMessage[2].classList.add('invalid');
            errorMessage[2].innerHTML = 'Must enter a valid ID format';
            errorMessage[2].style = "color: #ff0000";
        }
    }

    inputDni.onblur = function(){
        validateId();
    }

    inputDni.onfocus = function(){
        errorMessage[2].classList.remove('invalid');
        errorMessage[2].classList.remove('correct');
        errorMessage[2].innerHTML = ' ';
    }

    function validateBirthday() {
        var birthdayValidate = inputDateOfBirth.value;
        var day = birthdayValidate.substring (0,2);
        var month = birthdayValidate.substring (3,5);
        var year = birthdayValidate.substring (6,10);

        if (birthdayValidate.length !==10 || birthdayValidate.substring(2,3) !=='/' || birthdayValidate.substring(5,6) !=='/'
         || day <=00 || day > 31 || month <=00 || month > 12 || year <=1900 || year > 2020) {
            errorMessage[3].classList.add('invalid');
            errorMessage[3].innerHTML = 'Must enter a valid date format';
            errorMessage[3].style = "color: #ff0000";
        } else {
            errorMessage[3].classList.add('correct'); 
        }
    }

        inputDateOfBirth.onblur = function(){
            validateBirthday();
        }
    
        inputDateOfBirth.onfocus = function(){
            errorMessage[3].classList.remove('invalid');
            errorMessage[3].classList.remove('correct');
            errorMessage[3].innerHTML = ' ';
        }

    function validatePhoneNumber () {
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var PhoneValue = inputPhoneNumber.value;
        var onlyNumbers = true;
        var onlyLetters = true;

        PhoneValue.split('').forEach(function(letter){
            if (numbers.indexOf(letter) == -1) onlyNumbers = false;
            if (letters.indexOf(letter) == -1) onlyLetters = false;
        });

        if (onlyNumbers && !onlyLetters && PhoneValue.length == 10) {
            errorMessage[4].classList.add('correct');
            errorMessage[4].innerHTML = ' ';
        } else if (inputPhoneNumber.value.length <= 0){
            errorMessage[4].classList.add('invalid');
            errorMessage[4].innerHTML = 'Fiels are required';
            errorMessage[4].style = "color: #ff0000";
        } else {
            errorMessage[4].classList.add('invalid');
            errorMessage[4].innerHTML = 'Must enter a valid phone number';
            errorMessage[4].style = "color: #ff0000";
        }
    }

    inputPhoneNumber.onblur = function(){
        validatePhoneNumber();
    }

    inputPhoneNumber.onfocus = function(){
        errorMessage[4].classList.remove('invalid');
        errorMessage[4].classList.remove('correct');
        errorMessage[4].innerHTML = ' ';
    }

    function validateAddress () {
    var alphaNumeric = ' 0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var letters = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var addressValue = inputAddress.value;
    var isAlphaNumeric = true;
    var onlyNumbers = true;
    var onlyLetters = true;

    addressValue.split('').forEach(function(letter){
        if (alphaNumeric.indexOf(letter) == -1) isAlphaNumeric = false;
        if (numbers.indexOf(letter) == -1) onlyNumbers = false;
        if (letters.indexOf(letter) == -1) onlyLetters = false;
    });

    if (alphaNumeric && !onlyNumbers && !onlyLetters && addressValue.length >=5 && addressValue.indexOf(' ') != -1) {
        errorMessage[5].classList.add('correct');
        errorMessage[5].innerHTML = ' ';
    } else if (inputAddress.value.length == 0){
        errorMessage[5].classList.add('invalid');
        errorMessage[5].innerHTML = 'Fiels are required';
        errorMessage[5].style = "color: #ff0000";
    } else {
        errorMessage[5].classList.add('invalid');
        errorMessage[5].innerHTML = 'Must enter a valid address';
        errorMessage[5].style = "color: #ff0000";
    }
}

inputAddress.onblur = function(){
    validateAddress();
}

inputAddress.onfocus = function(){
    errorMessage[4].classList.remove('invalid');
    errorMessage[4].classList.remove('correct');
    errorMessage[4].innerHTML = ' ';
}

function validateCity () {
    var alphaNumeric = ' 0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var letters = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var cityValue = inputCity.value;
    var isAlphaNumeric = true;
    var onlyNumbers = true;
    var onlyLetters = true;

    cityValue.split('').forEach(function(letter){
        if (alphaNumeric.indexOf(letter) == -1) isAlphaNumeric = false;
        if (numbers.indexOf(letter) == -1) onlyNumbers = false;
        if (letters.indexOf(letter) == -1) onlyLetters = false;
    });

    if (alphaNumeric && !onlyNumbers && !onlyLetters && cityValue.length >3) {
        errorMessage[6].classList.add('correct');
        errorMessage[6].innerHTML = ' ';
    } else if (inputCity.value.length == 0){
        errorMessage[6].classList.add('invalid');
        errorMessage[6].innerHTML = 'Fiels are required';
        errorMessage[6].style = "color: #ff0000";
    } else {
        errorMessage[6].classList.add('invalid');
        errorMessage[6].innerHTML = 'Must enter a valid city';
        errorMessage[6].style = "color: #ff0000";
    }
}

inputCity.onblur = function(){
    validateCity();
}

inputCity.onfocus = function(){
    errorMessage[6].classList.remove('invalid');
    errorMessage[6].classList.remove('correct');
    errorMessage[6].innerHTML = ' ';
}

function validatePostalCode () {
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var PostalCodeValue = inputPostalCode.value;
    var onlyNumbers = true;
    var onlyLetters = true;

    PostalCodeValue.split('').forEach(function(letter){
        if (numbers.indexOf(letter) == -1) onlyNumbers = false;
        if (letters.indexOf(letter) == -1) onlyLetters = false;
    });

    if (onlyNumbers && !onlyLetters && PostalCodeValue.length >=4 && PostalCodeValue.length <=5) {
        errorMessage[7].classList.add('correct');
        errorMessage[7].innerHTML = ' ';
    } else if (inputPostalCode.value.length <= 0){
        errorMessage[7].classList.add('invalid');
        errorMessage[7].innerHTML = 'Fiels are required';
        errorMessage[7].style = "color: #ff0000";
    } else {
        errorMessage[7].classList.add('invalid');
        errorMessage[7].innerHTML = 'Must enter a valid postal code';
        errorMessage[7].style = "color: #ff0000";
    }
}

inputPostalCode.onblur = function(){
    validatePostalCode();
}

inputPostalCode.onfocus = function(){
    errorMessage[7].classList.remove('invalid');
    errorMessage[7].classList.remove('correct');
    errorMessage[7].innerHTML = ' ';
}

function validateEmail () {
    var email = inputMail;
    var mailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (inputMail.value.match(regExp)) {
        errorMessage[8].classList.add('correct');
        errorMessage[8].innerHTML = ' ';
    } else if (inputMail.value.length == 0){
        errorMessage[8].classList.add('invalid');
        errorMessage[8].innerHTML = 'Fields are required';
        errorMessage[8].style = "color: #ff0000";
    } else {
        errorMessage[8].classList.add('invalid');
        errorMessage[8].innerHTML = 'Must enter a valid email';
        errorMessage[8].style = "color: #ff0000";
    }
}

inputMail.onblur = function(){
    validateEmail();
}

inputMail.onfocus = function(){
    errorMessage[8].classList.remove('invalid');
    errorMessage[8].classList.remove('correct');
    errorMessage[8].innerHTML = ' ';
}

function validatePassword () {
    var alphaNumeric = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    var passwordValue = inputPsw.value;
    var isAlphaNumeric = true;
    var onlyNumbers = true;
    var onlyLetters = true;

    passwordValue.split('').forEach(function(letter){
        if (alphaNumeric.indexOf(letter) == -1) isAlphaNumeric = false;
        if (numbers.indexOf(letter) == -1) onlyNumbers = false;
        if (letters.indexOf(letter) == -1) onlyLetters = false;
    })

    if (isAlphaNumeric && !onlyNumbers && !onlyLetters && passwordValue.length >=8) {
        errorMessage[9].classList.add('correct');
        errorMessage[9].innerHTML = ' ';
    } else if (inputPsw.value.length == 0){
        errorMessage[9].classList.add('invalid');
        errorMessage[9].innerHTML = 'Fiels are required';
        errorMessage[9].style = "color: #ff0000";
    } else {
        errorMessage[9].classList.add('invalid');
        errorMessage[9].innerHTML = 'Must enter a valid password';
        errorMessage[9].style = "color: #ff0000";
    }
}

    inputPsw.onblur = function(){
        validatePassword();
    }
    
    inputPsw.onfocus = function(){
        errorMessage[9].classList.remove('invalid');
        errorMessage[9].classList.remove('correct');
        errorMessage[9].innerHTML = ' ';
    }

    function validateRepeat () {
        var alphaNumeric = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var repeatValue = inputRepeatPassword.value;
        var isAlphaNumeric = true;
        var onlyNumbers = true;
        var onlyLetters = true;
    
        repeatValue.split('').forEach(function(letter){
            if (alphaNumeric.indexOf(letter) == -1) isAlphaNumeric = false;
            if (numbers.indexOf(letter) == -1) onlyNumbers = false;
            if (letters.indexOf(letter) == -1) onlyLetters = false;
        })
    
        if (isAlphaNumeric && !onlyNumbers && !onlyLetters && repeatValue.length >=8) {
            errorMessage[10].classList.add('correct');
            errorMessage[10].innerHTML = ' ';
        } else if (inputRepeatPassword.value.length == 0){
            errorMessage[10].classList.add('invalid');
            errorMessage[10].innerHTML = 'Fiels are required';
            errorMessage[10].style = "color: #ff0000";
        } else {
            errorMessage[10].classList.add('invalid');
            errorMessage[10].innerHTML = 'Must enter a valid password';
            errorMessage[10].style = "color: #ff0000";
        }
    }
    
        inputRepeatPassword.onblur = function(){
            validateRepeat();
        }
        
        inputRepeatPassword.onfocus = function(){
            errorMessage[9].classList.remove('invalid');
            errorMessage[9].classList.remove('correct');
            errorMessage[9].innerHTML = ' ';
        }

    function validateSubmit() {
        var name = inputName.value;
        var surname = inputLastName.value;
        var id = inputDni.value;
        var date = inputDateOfBirth.value;
        var phone = inputPhoneNumber.value;
        var address = inputAddress.value;
        var city = inputCity.value;
        var pc = inputPostalCode.value;
        var email = inputMail.value;
        var pass = inputPsw.value;
        var repeatpass = inputRepeatPassword.value;


        if ((name.length != 0) && (surname.length != 0) && (id.length != 0)
        && (date.length != 0) && (phone.length != 0) && (address.length != 0)
        && (city.length != 0) && (pc.length != 0) && (email.length != 0) &&
        (pass.length != 0) && (repeatpass.length != 0)) {
            alert ('Login successfull');
            alert('Full name: '+name+' Surname: '+surname+' Id: '+id+' Date of birth: '+date+' Phone number: '+phone+' Address: '+address+' City: '+city+' Postal code: '+pc+' Email: '+
            email+' Password: '+pass+'');
        } else {
            alert('Validation was not success');
        }
    }

    inputButton.onclick = function() {
        validateSubmit();
    }







