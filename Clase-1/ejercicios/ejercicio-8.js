// Ejercicio 8: Contador de letras
// Crea una función que reciba una cadena de texto y una letra, y devuelva
// cuántas veces aparece esa letra en la cadena.
// Consigna:
// • Usa un bucle for y condicionales.
// • Haz que la búsqueda no distinga entre mayúsculas y minúsculas.

let texto = prompt("Ingrese una cadena de texto:");
let letra = prompt("Ingrese una letra para contar su aparición en el texto:");

function contarLetras(cadena, letra) {
    let contador = 0;
    let letraMinuscula = letra.toLowerCase();

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === letraMinuscula) {
            contador++;
        }
    }

    return contador;
}

let resultado = contarLetras(texto, letra);
console.log(`La letra "${letra}" aparece ${resultado} veces en el texto.`);