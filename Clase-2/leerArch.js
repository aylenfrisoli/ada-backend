// Importa el módulo 'fs' que permite trabajar con el sistema de archivos.
const fs = require('fs');

// Utiliza el método 'readFile' para leer el contenido de un archivo de manera asincróna.
// 'archivo.txt' es el nombre del archivo a leer.
// 'utf8' es el formato de codificación de caracteres para interpretar el contenido como texto.
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  // Si ocurre un error durante la lectura, 'err' contendrá información sobre el error.
  if (err) {
    // Muestra el mensaje de error en la consola.
    console.error('Error al leer el archivo:', err);
    // Detiene la ejecución de la función si hay un error.
    return;
  }
  // Si no hubo errores, muestra el contenido del archivo en la consola.
  console.log('Contenido del archivo:', data);
});
