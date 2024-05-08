/* Pedir al usuario el nombre de un estudiante y sus 3 notas. Calcule el promedio de sus 3 notas, Si el promedio es menor de 70, el profesor aplico una ayuda de un 5% al total de las notas y lo sumo al promedio. Debera mostrar el nombre del estudiante, las tres notas y el promedio con un mensaje de aprobado o reprobado. Un estudiante aprueba si su promedio es superior o igual a 70, de lo contrario es reprobado. */
const read = require("prompt-sync")();
const nombre = read("Ingresar nombre: ");
const nota_1s = read("Ingresar nota 1: ");
const nota_1 = parseFloat(nota_1s);
const nota_2s = read("Ingresar nota 2: ");
const nota_2 = parseFloat(nota_2s);
const nota_3s = read("Ingresar nota 3: ");
const nota_3 = parseFloat(nota_3s);
const promedio_s = (nota_1 + nota_2 + nota_3) / 3;
const promedio = parseFloat(promedio_s);
console.log("Su promedio es:", promedio);
let ayuda = 0;
if (promedio < 70) {
  ayuda = (promedio * 5) / 100;
}
const promedio_final = promedio + ayuda;
console.log(`Nombre del estudiante es:${nombre}`);
console.log(`La primera nota 1 es:${nota_1}
La segunda nota 2 es:${nota_2} 
La tercera nota 3 es:${nota_3}`);
if (promedio_final >= 70) {
  console.log(`Usted ha aprobado con ${promedio_final}`);
} else {
  console.log(`Usted ha reprobado con ${promedio_final}`);
}
