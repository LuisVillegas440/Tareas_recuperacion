/* Vamos a aplicar un descuento del 20% a las compras mayores de 50 euros y escribimos un aviso */
const read = require('prompt-sync')();
const subtotal_s = read('Escribir subtotal de la factura: ');
const subtotal = parseFloat(subtotal_s);
let descuento_s = 0;
let descuento_porcentaje = parseFloat(descuento_s);
if (subtotal > 50) {
    descuento_porcentaje = (subtotal * 20) / 100;
}
const total_s = subtotal - descuento_porcentaje;
const total = parseFloat(total_s);
console.log(`Su factura final con el descuento es ${total}`);


