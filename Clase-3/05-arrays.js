// Arrays o listas: Son estructuras de datos que permiten almacenar múltiples 
// valores en una sola variable. Cada valor dentro del array se llama elemento 
// y se accede a través de su índice, que comienza en 0.

let colores = ["Rojo", "Verde", "Azul"]; // Un array de strings
let numeros = [10, 20, 30, 40]; // Un array de números
let valoresBooleanos = [true, false, false, true]; // Un array de valores booleanos
let mezclados = ["Hola", 100, true, colores]; // Un array mixto

// Mostrar un array completo
// console.log(numeros);
// console.log(colores);
// console.log(valoresBooleanos);
// console.log(mezclados);

// // Acceder a un dato específico dentro del array
console.log(colores[1]); // Verde

// // Arrays dentro de arrays
console.log(mezclados[3][0]); // Rojo
