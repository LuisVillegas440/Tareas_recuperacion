/* Teiens que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera. No vale usar arrays ni asignación múltiple */
const read = require('prompt-sync')();
let variable1 = read('Ingresar variable 1: ');
let variable2 = read('Ingresar variable 2: ');
console.log('Variable 1 es: ',variable1);
console.log('Variable 2 es: ',variable2);
let var1 = variable1;
variable1 = variable2;
variable2 = var1;
console.log('La variable 1 es', variable1);
console.log('La variable 2 es', variable2);

