/* Vamos a convertir notas en niveles usando un if anidados. Notas menor de 5 suspenso, 5-6 aprobados, 7-8 notables, 9-10 sobresalientes. */
const read = require('prompt-sync')();
const nota_s = read('Ingresar nota: ');
const nota = parseFloat(nota_s);
let nivel = '';
if (nota < 5) {
    nivel = 'Es suspenso';
} else {
    if (nota < 7) {
       nivel = 'Aprobados';
    } else {
        if (nota < 9) {
            nivel = 'notables';

        } else {
            nivel = 'sobresalientes';
        }
    }
}
console.log('Su nivel es:', nivel);

