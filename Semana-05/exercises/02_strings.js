console.log('--EXERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log ('Exercise 2. a:');

var text = 'hello, how are you?';

console.log (text.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log ('Exercise 2. b:');

var text = 'hello, how are you?';

var result = text.substring(0, 5);

console.log (result);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log ('Exercise 2. c:');

var text = 'hello, how are you?';

var result = text.substring(19, 16);

console.log (result);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log ('Exercise 2. d:');

var text = 'hello, how are you?';

var result = text.substring(0, 1).toUpperCase() + text.substring(1, 19).toLowerCase();

console.log (result);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log ('Exercise 2. e:');

var text = 'hello, how are you?';

var result = text.indexOf(' ');

console.log (result);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)

console.log ('Exercise 2. f:');

var text = 'multicolored butterfly';

var result = (text.substring(0, 1).toUpperCase() + text.substring(1, 12).toLowerCase()) + ' ' + (text.substring(13, 14).toUpperCase() + text.substring(14, 22).toLowerCase());

console.log (result);

