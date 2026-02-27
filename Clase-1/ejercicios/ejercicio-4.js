// Ejercicio 4: Contando vocales 🅰️🅾️
// Crea una función que reciba una cadena de texto y devuelva cuántas
// vocales contiene.
// Consigna:
// • Usa un bucle for y condicionales.
// • Considera vocales mayúsculas y minúsculas (a, e, i, o, u).

let texto = "Hola Mundo";

function contarVocales(cadena) {
  let contador = 0;
  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i].toLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
      contador++;
    }
  }
  return contador;
}
console.log(contarVocales(texto));
