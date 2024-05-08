/* Realizar un diagrama de flujo que permita ingresar por teclado los valores de 3 libros, saque el subtotal, le saque el IVA y si el subtotal es menor o igual a $200 hacer el 10% de descuento, si es menor o igual a $400 hacer el 15% de descuento, caso contrario hacer el 20% de descuento, en todos los casos imprimir el subtotal, el IVA, el descuento y el total a pagar. */
const read = require('prompt-sync')();
const libro_1s = read('Ingresar el valor del primer libro: ');
const libro_1 = parseFloat(libro_1s);
const libro_2s = read('Ingresar el valor del segundo libro: ');
const libro_2 = parseFloat(libro_2s);
const libro_3s = read('Ingresar el valor del tercer libro: ');
const libro_3 = parseFloat(libro_3s);
const subtotal_libross = (libro_1 + libro_2 + libro_3) / 3;
const subtotal_libros = parseFloat(subtotal_libross);
const iva_s = read('Ingresar iva a aplicar: ');
const iva = parseFloat(iva_s);
const iva_aplicar = (subtotal_libros * iva) / 100
const subtotal_s = subtotal_libros + iva_aplicar;
const subtotal = parseFloat(subtotal_s);
let descuento_s = 0;
let descuento = parseFloat(descuento_s);
if (subtotal <= 200) {
    descuento = (subtotal * 10) / 100;
   
} else {
    if (subtotal <= 400) {
        descuento = (subtotal * 15) / 100;
    } else {
        descuento = (subtotal * 20) / 100;
    }
}
const total_s = subtotal - descuento;
const total = parseFloat(total_s);
console.log(`EL subtotal es ${subtotal_libros}`);
console.log (`El iva aplicado fue ${iva}`);
console.log(`Este fue el descuento ${descuento}`);
console.log(`Este fue el total a pagar ${total}`);

