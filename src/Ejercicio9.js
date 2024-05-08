/* Programa que pida tres números y diga si la multiplicación de los dos primeros es igual al tercero. */
const read = require('prompt-sync')();
const num1 = read('Ingresar numero 1: ');
const num2 = read('Ingresar numero 2: ');
const num3_s = read('Ingresar numero 3: ');
const num3 = parseFloat(num3_s);
const multiplicacion = num1 * num2 
if (multiplicacion == num3) {
    console.log('Es igual al tercer numero');
} else {
    console.log('No es igual al tercer numero');
}
