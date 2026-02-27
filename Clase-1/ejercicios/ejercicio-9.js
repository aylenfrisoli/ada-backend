// Ejercicio 9: Números únicos
// Escribe una función que reciba un array de números y devuelva un nuevo
// array sin números repetidos.

// Consigna:
// • Usa el objeto Set para eliminar duplicados.
// • Convierte el Set a un array usando el operador spread (...).

let numeros = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 1];

function eliminarDuplicados(arr) {
    let numerosUnicos = new Set(arr);
    return [...numerosUnicos];
}

let resultado = eliminarDuplicados(numeros);
console.log(resultado);