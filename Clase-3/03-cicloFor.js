// Programa que simula un loro: repite lo que oye 5 veces

// Paso 1: Importamos el módulo 'prompt-sync' para recibir texto del usuario
// Este módulo permite pedir datos al usuario desde la consola
const prompt = require('prompt-sync')();

// Paso 2: Solicitamos al usuario que ingrese un texto
let texto = prompt("Ingresa el texto que quieres que el loro repita: ");

// Paso 3: Usamos un ciclo 'for' para repetir el texto 5 veces
// La estructura del ciclo:
// - Inicialización: let i = 0 (inicia el contador en 0)
// - Condición: i < 5 (el ciclo continúa mientras i sea menor que 5)
// - Incremento: i++ (suma 1 al contador en cada iteración)
for (let i = 0; i < 5; i++) {
    console.log(`Repetición ${i + 1}: ${texto}`);
}

// Explicación:
// En cada iteración del ciclo:
// 1. Se imprime el texto ingresado por el usuario.
// 2. El contador (i) aumenta en 1.
// El ciclo se ejecuta un total de 5 veces, ya que la condición es i < 5.
