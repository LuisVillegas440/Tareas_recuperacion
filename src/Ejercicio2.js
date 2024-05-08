
/* Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . El script debe mostrar el consumo de combustible por kilómetro.

Un problema matemático muy simple numero de litros dividido por número de kilómetros. */

const read = require('prompt-sync')();
const numero_kms = read('Ingresar km recorridos en el coche: ');
const numero_km = parseFloat(numero_kms);
const numero_lts = read('Ingresar cuantos litros se han consumido: ');
const numero_lt = parseFloat(numero_lts);
const consumo_combustible_por_km = numero_lt / numero_km;
console.log(`Su consumo de combustible por los ${numero_km}km recorridos es de ${consumo_combustible_por_km} `);

