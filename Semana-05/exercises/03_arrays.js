console.log('--EXERCISE 3: ARRAYS');

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
 "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log ('Exercise 3. a:');

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augost', 'september', 'october',
'november', 'december'];

console.log (months[5], months[11]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log ('Exercise 3. b:');

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augost', 'september', 'october',
'november', 'december'];

var alfa = months.sort ();

console.log (alfa);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log ('Exercise 3. c:');

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augost', 'september', 'october',
'november', 'december'];

months.push ('winter');

months.unshift ('summer');

console.log (months);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log ('Exercise 3. d:');

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augost', 'september', 'october',
'november', 'december'];

months.shift ();

months.pop ();

console.log (months);

// e. Invertir el orden del array (utilizar reverse).

console.log ('Exercise 3. e:');

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augost', 'september', 'october',
'november', 'december'];

months.reverse ();

console.log (months);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión -(utilizar join).

console.log ('Exercise 3. f:');

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augost', 'september', 'october',
'november', 'december'].join ('-');

console.log (months);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var months = ['january','february','march','april','may','june','july','augost','september','october',
'november','december'].slice (4, 11);

console.log (months);


