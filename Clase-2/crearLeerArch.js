const fs = require('fs'); // Importa el módulo 'fs' que proporciona funciones para interactuar con el sistema de archivos.

// Crear un nuevo directorio
fs.mkdir('nuevo_directorio', (err) => { // Llama a la función mkdir para crear un directorio llamado 'nuevo_directorio'.
  if (err) { // Verifica si ocurrió un error durante la creación del directorio.
    console.error('Error al crear el directorio:', err); // Muestra un mensaje de error en la consola si algo salió mal.
    return; // Termina la ejecución de la función si hubo un error.
  }
  console.log('Directorio creado con éxito'); // Muestra un mensaje de éxito en la consola si el directorio se creó correctamente.
});

// Leer el contenido de un directorio
fs.readdir('.', (err, files) => { // Llama a la función readdir para leer el contenido del directorio actual ('.').
  if (err) { // Verifica si ocurrió un error durante la lectura del directorio.
    console.error('Error al leer el directorio:', err); // Muestra un mensaje de error en la consola si algo salió mal.
    return; // Termina la ejecución de la función si hubo un error.
  }
  console.log('Contenido del directorio:', files); // Muestra una lista de los archivos y directorios en el directorio actual en la consola.
});
