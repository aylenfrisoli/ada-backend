// Ejercicio: Calculadora de Descuento
// Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
// Pide al usuario que ingrese el precio original del producto y el porcentaje de descuento,
// y muestra el precio final.
// Pasos para resolver el ejercicio: (Lógica de programación)
// 1- Pide al usuario que ingrese el precio original del producto 
// 2- Pide al usuario que ingrese el porcentaje de descuento,
// 3- Hacer los calculos
// 4- Muestra el precio final.


// Para trabajar con prompt en Node.js, puedes usar la biblioteca 'prompt-sync'. 
// Para instalarla, ejecuta: npm install prompt-sync
// Si necesitamos intervencion del usuario, es necesario importar la biblioteca 
// 'prompt-sync' para poder solicitar datos desde la consola.
// Armamos la constante prompt para usarla posteriormente en el programa.

// require es una función que se utiliza para importar módulos en Node.js. 
// En este caso, estamos importando la biblioteca 'prompt-sync' para poder usarla en nuestro programa.
const prompt = require('prompt-sync')();

// 1. Pedir al usuario el precio original del producto.
// parseFloat se utiliza para convertir la entrada del usuario (que es una cadena de texto) 
// en un número decimal (flotante), lo que nos permite realizar cálculos matemáticos con ese valor.
let precioOriginal = parseFloat(prompt('Ingresa el precio original del producto: '));

// 2. Pedir al usuario el porcentaje de descuento.
let porcentajeDescuento = parseFloat(prompt('Ingresa el porcentaje de descuento: '));

// 3. Calcular el descuento
let descuento = (precioOriginal * porcentajeDescuento) / 100;

// 4. Calcular el precio final
let precioFinal = precioOriginal - descuento;

// 5. Mostrar el precio final al usuario
// toFixed(2) se utiliza para formatear el número a dos decimales, 
// lo que es común para representar precios.
// console.log se utiliza para imprimir/mostrar el resultado en la consola,
// mostrando el precio final después de aplicar el descuento.
console.log('El precio final después del descuento es:', precioFinal.toFixed(2));