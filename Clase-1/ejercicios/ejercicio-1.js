// Ejercicio 1: ¿Quién puede entrar al parque?
// Tienes un parque de diversiones que permite la entrada a personas
// mayores de 12 años y menores de 60. Escribe una función que reciba una
// lista de edades y devuelva cuántas personas pueden entrar al parque.
// Consigna:
// • Usa un bucle for y condicionales.
// • Usa un array como entrada de la función.
// • Devuelve el número de personas que cumplen con los requisitos.

let edades = [10, 15, 35, 65, 12, 59];

function personasQuePuedenEntrar(edades) {
  let contador = 0;
  for (let edad = 0; edad < edades.length; edad++) {
    if (edades[edad] >= 12 && edades[edad] <= 60) {
      contador++;
    }
  }
  return contador;
}

console.log(personasQuePuedenEntrar(edades)); // Debe devolver 4