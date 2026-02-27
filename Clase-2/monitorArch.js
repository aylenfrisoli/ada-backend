// Importa el módulo 'fs' que proporciona funcionalidades para interactuar con el sistema de archivos.
const fs = require('fs');

// Usa el método 'watch' del módulo 'fs' para vigilar el archivo 'archivo.txt' en busca de cambios.
fs.watch('archivo.txt', (eventType, filename) => {
  // Verifica si se ha proporcionado el nombre del archivo (filename) en el evento.
  if (filename) {
    // Muestra en la consola el nombre del archivo y el tipo de evento que ocurrió (modificación, eliminación, etc.).
    console.log(`${filename} ha sido modificado. Evento: ${eventType}`);
    return; // Termina la ejecución de la función después de manejar el evento.
  }
});
