// Ejercicio 4: Gestión de Estudiantes
// Instrucciones
// 1. Dentro de la carpeta clase2/ejercicio4, crea dos archivos:
// o estudiantes.js
// o gestionEstudiantes.js
// 2. En estudiantes.js:
// o Crea un array de objetos que represente una lista de
// estudiantes.
// o Cada estudiante debe tener las propiedades: nombre, edad,
// curso y notas (un array de números).
// o Exporta este array usando module.exports.
// 3. En gestionEstudiantes.js:
// o Importa el array desde estudiantes.js.
// o Muestra en la consola los nombres de todos los estudiantes.
// o Calcula y muestra el promedio de notas de un estudiante
// específico.
// o Agrega un nuevo estudiante al array y muestra el array
// actualizado en formato JSON.

// estudiantes.js
const estudiantes = [
    {
        nombre: "Carlos Gómez",
        edad: 20,
        curso: "Programación",
        notas: [80, 85, 90]
    },
    {
        nombre: "Lucía Martínez",
        edad: 21,
        curso: "Diseño Gráfico",
        notas: [75, 80, 82]
    },
    {
        nombre: "Miguel Rodríguez",
        edad: 22,
        curso: "Marketing Digital",
        notas: [88, 92, 95]
    }
];

// Exportar el array de estudiantes
module.exports = estudiantes;

// gestionEstudiantes.js
// Importar el array desde estudiantes.js
const estudiantesImportados = require('./estudiantes');

// Mostrar en la consola los nombres de todos los estudiantes
console.log("Nombres de los estudiantes:");
estudiantesImportados.forEach(estudiante => {
    console.log(estudiante.nombre);
});

// Calcular y mostrar el promedio de notas de un estudiante específico (por ejemplo, Carlos Gómez)
const estudianteEspecifico = estudiantesImportados.find(est => est.nombre === "Carlos Gómez");
if (estudianteEspecifico) {
    const promedioNotas = estudianteEspecifico.notas.reduce((acc, nota) => acc + nota, 0) / estudianteEspecifico.notas.length;
    console.log(`Promedio de notas de ${estudianteEspecifico.nombre}: ${promedioNotas.toFixed(2)}`);
} else {
    console.log("Estudiante no encontrado.");
}

// Agregar un nuevo estudiante al array
const nuevoEstudiante = {
    nombre: "Sofía López",
    edad: 23,
    curso: "Fotografía",
    notas: [85, 87, 90]
};
estudiantesImportados.push(nuevoEstudiante);

// Mostrar el array actualizado en formato JSON
console.log("Array actualizado de estudiantes:");
console.log(JSON.stringify(estudiantesImportados, null, 2));
