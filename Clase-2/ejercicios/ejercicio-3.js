// Ejercicio 3: Módulos y require
// 1.Dentro de la carpeta clase2, crea un archivo llamado datos.js que
// contenga un objeto con información sobre un curso, similar a los ejemplos
// anteriores.

// 2.Crea otro archivo llamado actividad3.js que importará los datos de
// datos.js usando require().
// Instrucciones:
// • En datos.js, define un objeto que tenga información como
// nombreCurso, duracion, y temas (array de cadenas).
// • Exporta este objeto para que pueda ser utilizado en otros archivos.
// • En actividad3.js, importa el objeto usando require().
// • Muestra en la consola la información del curso.

// datos.js
const curso = {
    nombreCurso: "Introducción a JavaScript",
    duracion: "4 semanas",
    temas: ["Variables", "Funciones", "Objetos", "Arrays"]
};

// Exportar el objeto para que pueda ser utilizado en otros archivos
module.exports = curso;

// actividad3.js
// Importar el objeto usando require()
const cursoImportado = require('./datos');

// Mostrar en la consola la información del curso
console.log(`Nombre del Curso: ${cursoImportado.nombreCurso}`);
console.log(`Duración: ${cursoImportado.duracion}`);
console.log(`Temas: ${cursoImportado.temas.join(', ')}`);