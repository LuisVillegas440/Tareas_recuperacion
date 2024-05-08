/* Calcular el precio de un tiquete de ida y regreso en autobús, conociendo la distancia a recorrer y sabiendo que sí el número de días de estadía es superior a 7 y la distancia es superior a 800 Km, obtiene un descuento de 25%. El precio del kilómetro es 12,34 USD */
const read = require('prompt-sync')();
const distancia = read('Cuantos km ha recorrido? ');
const estadia_dias = read('Cuantos dias se va a permanecer aqui? ');
const precio = distancia * 12.34;
let descuento = 0;
if (estadia_dias > 7 && distancia > 800)  {
    descuento = (precio * 25) / 100;
}
const total = precio - descuento;
console.log(`Total a pagar es ${total}`);

