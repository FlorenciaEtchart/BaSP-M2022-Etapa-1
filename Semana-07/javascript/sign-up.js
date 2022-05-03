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
        } else {
            errorMessage[0].classList.add('invalid');
            errorMessage[0].innerHTML = 'Must enter more than 3 characteres and only letters';
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
        } else {
            errorMessage[1].classList.add('invalid');
            errorMessage[1].innerHTML = 'Must enter more than 3 characteres and only letters';
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
        } else {
            errorMessage[2].classList.add('invalid');
            errorMessage[2].innerHTML = 'Must enter a valid ID format, between 7 and 8 numbers';
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
        } else {
            errorMessage[4].classList.add('invalid');
            errorMessage[4].innerHTML = 'Must enter a valid phone number';
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
    } else {
        errorMessage[5].classList.add('invalid');
        errorMessage[5].innerHTML = 'Must enter a valid address';
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
    } else {
        errorMessage[6].classList.add('invalid');
        errorMessage[6].innerHTML = 'Must enter a valid city';
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
    } else {
        errorMessage[7].classList.add('invalid');
        errorMessage[7].innerHTML = 'Must enter a valid postal code';
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
    } else {
        errorMessage[8].classList.add('invalid');
        errorMessage[8].innerHTML = 'Must enter a valid email';
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
    } else {
        errorMessage[9].classList.add('invalid');
        errorMessage[9].innerHTML = 'Must enter a valid password';
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
        } else {
            errorMessage[10].classList.add('invalid');
            errorMessage[10].innerHTML = 'Must match with password';
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

    function SignUp (
        nameValue,
        lastNameValue,
        idValue,
        dobValue,
        phoneValue,
        addressValue,
        cityValue,
        zipValue,
        emailValue,
        passValue,
        url) {

        var nameValue = inputName.value;
        var lastNameValue = inputLastName.value;
        var idValue = inputDni.value;
        var dobValue = inputDateOfBirth.value;
        var phoneValue = inputPhoneNumber.value;
        var addressValue = inputAddress.value;
        var cityValue = inputCity.value;
        var zipValue = inputPostalCode.value;
        var emailValue = inputMail.value;
        var passValue = inputPsw.value;
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
    

        fetch (
            url +
            '?name=' +
            nameValue +
            '&lastName=' +
            lastNameValue +
            '&dni=' +
            idValue +
            '&dob=' +
            dobValue +
            '&phone=' +
            phoneValue +
            '&address=' +
            addressValue +
            '&city=' +
            cityValue +
            '&zip=' +
            zipValue +
            '&email=' +
            emailValue +
            '&password=' +
            passValue
            )

        .then (function(response){
            return response.json();
             })
        .then (function(jsonResponse){
            alert (jsonResponse.msg);
            if (jsonResponse.success){
                myStorage ();
                var isOk =
                ' Name= ' +
                nameValue +
                ' Last Name= ' +
                lastNameValue +
                ' Id Number= ' +
                idValue +
                ' Day of Birth= ' +
                dobValue +
                ' Phone number= ' +
                phoneValue +
                ' Address= ' +
                addressValue +
                ' City= ' +
                cityValue +
                 'Zip number= ' +
                zipValue +
                ' Email= ' +
                emailValue +
                ' Password= ' +
                passValue
                alert (isOk);
            } else {
                var errorMsg = ' ';
                for(var i= 0;i<jsonResponse.errors.length; i++){
                    errorMsg += jsonResponse.errors[i].msg + '. - ';
                } 
                alert (errorMsg);
            }
            })

            .catch(function (error) {
                console.warn('error ', error);
            });
        }

        function myStorage () {
            localStorage.setItem('name', inputName.value);
            localStorage.setItem('lastName', inputLastName.value);
            localStorage.setItem('dni', inputDni.value);
            localStorage.setItem('birthday', inputDateOfBirth.value);
            localStorage.setItem('phone', inputPhoneNumber.value);
            localStorage.setItem('address', inputAddress.value);
            localStorage.setItem('city', inputCity.value);
            localStorage.setItem('zip', inputPostalCode.value);
            localStorage.setItem('email', inputMail.value);
        }


        inputButton.onclick = function(e) {
            
            var formatDate = inputDateOfBirth.value.split('-');
            var newFormat =
            formatDate.slice(1, 2) +
            '/' +
            formatDate.slice(2) +
            '/' +
            formatDate.slice(0, 1);

            SignUp(
                inputName.value,
                inputLastName.value,
                inputDni.value,
                newFormat,
                inputPhoneNumber.value,
                inputAddress.value,
                inputCity.value,
                inputPostalCode.value,
                inputMail.value,
            )

            e.preventDefault();
        }

        function save () {
            if (
                localStorage.getItem('name') != null &&
                localStorage.getItem('lastName') != null &&
                localStorage.getItem('dni') != null &&
                localStorage.getItem('birthday') != null &&
                localStorage.getItem('phone') != null &&
                localStorage.getItem('address') != null &&
                localStorage.getItem('city') != null &&
                localStorage.getItem('zip') != null &&
                localStorage.getItem('email') != null
            ) {
                nameValue = localStorage.getItem('name');
                lastNameValue = localStorage.getItem('lastName');
                idValue = localStorage.getItem('dni');
                dobValue = localStorage.getItem('birthday');
                phoneValue = localStorage.getItem('phone');
                addressValue= localStorage.getItem('address');
                cityValue = localStorage.getItem('city');
                zipValue = localStorage.getItem('zip');
                emailValue = localStorage.getItem('email');
            }
        }
    




        // errorMessage[0].classList.add('invalid');
        // errorMessage[0].innerHTML = 'Must enter more than 3 characteres and only letters';
        // errorMessage[0].style = "color: #ff0000";
        // errorMessage[1].classList.add('invalid');
        // errorMessage[1].innerHTML = 'Must enter more than 3 characteres';
        // errorMessage[1].style = "color: #ff0000";
        // errorMessage[2].classList.add('invalid');
        // errorMessage[2].innerHTML = 'Must enter a valid ID format';
        // errorMessage[2].style = "color: #ff0000";
        // errorMessage[3].classList.add('correct');
        // errorMessage[4].classList.add('invalid');
        // errorMessage[4].innerHTML = 'Must enter a valid phone number';
        // errorMessage[4].style = "color: #ff0000";
        // errorMessage[5].classList.add('invalid');
        // errorMessage[5].innerHTML = 'Must enter a valid address';
        // errorMessage[5].style = "color: #ff0000";
        // errorMessage[6].classList.add('invalid');
        // errorMessage[6].innerHTML = 'Must enter a valid city';
        // errorMessage[6].style = "color: #ff0000";
        // errorMessage[7].classList.add('invalid');
        // errorMessage[7].innerHTML = 'Must enter a valid postal code';
        // errorMessage[7].style = "color: #ff0000";
        // errorMessage[8].classList.add('invalid');
        // errorMessage[8].innerHTML = 'Must enter a valid email';
        // errorMessage[8].style = "color: #ff0000";
        // errorMessage[9].classList.add('invalid');
        // errorMessage[9].innerHTML = 'Must enter a valid password';
        // errorMessage[9].style = "color: #ff0000";

