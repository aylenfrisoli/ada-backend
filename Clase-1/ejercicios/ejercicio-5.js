// Ejercicio 5: Generador de iniciales 🅰️
// Escribe una función que reciba un nombre completo y devuelva las
// iniciales en mayúsculas.
// Consigna:
// • Usa el método split() para dividir el nombre.
// • Usa un bucle for y métodos de string.

let nombre = "Aylén Frísoli";

function generarIniciales(nombreCompleto) {
    let palabras = nombreCompleto.split(" ");
    let iniciales = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > 0) { // Verificar que la palabra no esté vacía
            iniciales += palabras[i][0].toUpperCase();
        }
    }
    return iniciales;
}

console.log(generarIniciales(nombre));