// Importa el módulo 'fs' para poder trabajar con el sistema de archivos
const fs = require('fs');

// Usa el método 'writeFile' del módulo 'fs' para escribir en un archivo
fs.writeFile('archivo.txt', '¡Hola, Mundo!', (err) => {
  // Si ocurre un error durante la escritura, se maneja aquí
  if (err) {
    // Muestra el error en la consola
    console.error('Error al escribir en el archivo:', err);
    return; // Termina la ejecución de la función si hay un error
  }
  // Si no hay errores, muestra un mensaje de éxito en la consola
  console.log('Archivo guardado con éxito');
});
