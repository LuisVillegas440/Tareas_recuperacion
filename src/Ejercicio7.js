/* Realizar un programa que solicite nombre, cantidad y precio de un producto, deberá calcular el total de la compra. Adicional, deberá solicitar 1 de los siguientes descuentos: a. 10% b. 30% c. 60% d. 85% Dependiendo del que el usuario seleccione, deberá calcular dicho descuento y mostrarlo en pantalla */
const read = require("prompt-sync")();
const nombre = read("Por favor, Ingresar su nombre: ");
const cantidad_s = read("Por favor, Ingresar cantidad del producto: ");
const cantidad = parseFloat(cantidad_s);
const precio_producto_s = read("Por favor, Ingresar precio del producto: ");
const precio_producto = parseFloat(precio_producto_s);
const subtotal_compra = precio_producto * cantidad;
const descuento_solicitado = read("Cual descuento desea solicitar: ");
let descuento_s = 0;
let descuento = parseFloat(descuento_s);
if (descuento_solicitado == "a") {
  descuento = (subtotal_compra * 10) / 100;
} else {
  if (descuento_solicitado == "b") {
    descuento = (subtotal_compra * 30) / 100;
  } else {
    if (descuento_solicitado == "c") {
      descuento = (subtotal_compra * 60) / 100;
    } else {
      if (descuento_solicitado == "d") {
        descuento = (subtotal_compra * 85) / 100;
      }
    }
  }
} 
//OTRAS FORMAS DE RESOLVER EL EJERCICIO
/* if (descuento_solicitado == "a") {
  descuento = (subtotal_compra * 10) / 100;
} else if (descuento_solicitado == "b") {
  descuento = (subtotal_compra * 30) / 100;
} else if (descuento_solicitado == "c") {
  descuento = (subtotal_compra * 60) / 100;
} else if (descuento_solicitado == "d") {
  descuento = (subtotal_compra * 85) / 100;
} */

/* const porcentajes = { a: 10, b: 30, c: 60, d: 85 };
descuento = (subtotal_compra * porcentajes[descuento_solicitado]) / 100;
const total = subtotal_compra - descuento; */
console.log(`El total es ${total}`);
