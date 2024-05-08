/* Un restaurante ofrece un descuento del 10% para consumos de hasta $ 100.00 y un descuento de 20% para consumos mayores. Para ambos casos se aplica un impuesto del 12%. Determinar el monto del descuento, el impuesto y el importe a pagar. */
const read = require('prompt-sync')();
const consumo = read('De cuanto fue su consumo? ');
const iva = 12;
const iva_aplicado_s = (consumo * 12) / 100;
const iva_aplicado = parseFloat(iva_aplicado_s);
let descuento_s = 0;
let descuento = parseFloat(descuento_s);
if (consumo <= 100) {
    descuento = (consumo * 10) / 100;
} else {
    if (consumo > 100) {
        descuento = (consumo * 20) / 100;
    }
}

const monto_total_s = (consumo - descuento) + iva_aplicado ;
const monto_total = parseFloat(monto_total_s);
console.log('El descuento es de', descuento);
console.log(`El impuesto fue de ${iva} y el importe a pagar fue ${iva_aplicado}`);
console.log('EL monto total final a pagar es:', monto_total);
