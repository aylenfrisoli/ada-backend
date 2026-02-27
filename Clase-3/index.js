// CONSIGNA:
// Vamos a crear una aplicación básica en Node.js para gestionar una lista de tareas.
// Usaremos módulos nativos como 'fs' y trabajaremos con JSON para almacenar nuestras tareas.
// El objetivo es que aprendan a leer y escribir en archivos, usar rutas relativas y absolutas,
// y trabajar con datos JSON en Node.js.

// PASOS A SEGUIR:
// 1. Inicializar un proyecto con `npm init -y` (opcional).
// 2. Crear un archivo `tareas.json` para almacenar las tareas.
// 3. Desarrollar un script que permita:
//    - Listar las tareas.
//    - Agregar una nueva tarea.

// Paso 1: Importar el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs'); // Módulo nativo de Node.js para manejar el sistema de archivos commonjs

// Paso 2: Definir la ruta del archivo JSON donde se almacenarán las tareas
const rutaArchivo = './tareas.json'; // Ruta relativa al archivo de tareas

// Paso 3: Leer los argumentos pasados desde la línea de comandos
const args = process.argv.slice(2); // process.argv es un array que contiene los argumentos pasados 
// al ejecutar el script. El primer elemento es 'node', el segundo es el nombre del archivo, 
// y los siguientes son los argumentos que el usuario ingresa. Se usa en JSON para pasar datos a 
// través de la línea de comandos.
// Ignorar los dos primeros argumentos (node y el archivo)
// Vamos a hacer varias funciones: agregar tarea, listar tareas, marcar tarea como completada
// Estas funciones se activarán según el comando que el usuario pase por línea de comandos
// (property) NodeJS.Process.argv: string[]
// The process.argv property returns an array containing the command-line arguments passed
// when the Node.js process was launched. 
// The first element will be execPath.See process.argv0 if access to the original value of argv[0] is needed. 
// The second element will be the path to the JavaScript file being executed.
// The remaining elements will be any additional command-line arguments.

// For example, assuming the following script for process-args.js:

// import { argv } from 'node:process';

// // print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
// Launching the Node.js process as:

// node process-args.js one two=three four
// Would generate the output:

// 0: /usr/local/bin/node
// 1: /Users/mjr/work/node/process-args.js
// 2: one
// 3: two=three
// 4: four

const comando = args[0]; // El primer argumento será el comando (agregar, listar, completar)

// El segundo argumento será la descripción de la tarea (si aplica)
// Para el comando "agregar", el segundo argumento es la descripción de la tarea
// Para el comando "completar", el segundo argumento es el ID de la tarea a completar
// .join(' ') se usa para unir los argumentos restantes en una sola cadena, 
// en caso de que la descripción tenga espacios (agregar "Comprar leche" en lugar de agregar "Comprar" "leche")
const descripcion = args.slice(1).join(' '); 

// Paso 4: Función para leer las tareas desde el archivo JSON y devolverlas como un array de objetos
const leerTareas = () => {
    const datos = fs.readFileSync(rutaArchivo, 'utf-8'); // Leer el archivo de tareas
    return JSON.parse(datos); // Parsear el contenido JSON y devolverlo como un array Node.js
};

// Paso 5: Función para escribir las tareas en el archivo JSON
const escribirTareas = (tareas) => {
    const datos = JSON.stringify(tareas, null, 2); // Convertir el array de tareas a JSON con formato
    // El segundo parámetro es para reemplazar (null = no reemplazar),
    // el tercero es para agregar espacios para legibilidad (2 espacios de indentación)
    fs.writeFileSync(rutaArchivo, datos, 'utf-8'); // Escribir el JSON en el archivo
};

// Paso 6: Función para agregar una nueva tarea
const agregarTarea = (contenido) => { // contenido es la descripción de la tarea a agregar
    const tareas = leerTareas(); // Leer las tareas existentes desde el archivo. Es un array de objetos
    // .push() se usa para agregar un nuevo objeto tarea al array de tareas. 
    // El ID se asigna como el número de tareas + 1 para asegurar que sea único.
    tareas.push({
                    id: tareas.length + 1, 
                    descripcion: contenido, 
                    completada: false 
                }); // Agregar la nueva tarea, por defecto no está completada por que no la realicé
    escribirTareas(tareas); // Guardar las tareas actualizadas en el archivo JSON
    console.log(`Tarea agregada: "${contenido}"`);
};

// Paso 7: Función para listar todas las tareas

const listarTareas = () => {
    const tareas = leerTareas(); // Leer las tareas desde el archivo JSON
    console.log('Lista de tareas:');
    tareas.forEach((tarea) => {
        const estado = tarea.completada ? '[✓]' : '[✗]'; // Mostrar si la tarea está completada o no
        console.log(`${tarea.id} ${tarea.descripcion} - ${estado}`); // Mostrar el estado y la descripción de la tarea
    });
};

// Paso 8: Función para marcar una tarea como completada
const completarTarea = (id) => {// Pasamos el id de la tarea a completar por linea de comandos
    const tareas = leerTareas(); // Leer las tareas desde el archivo JSON
    const tarea = tareas.find((t) => t.id === parseInt(id)); // Buscar la tarea por su ID
    if (tarea) {
        tarea.completada = true; // Marcar la tarea como completada
        escribirTareas(tareas); // Guardar los cambios en el archivo JSON
        console.log(`Tarea completada: "${tarea.descripcion}"`);
    } else {
        console.log(`Tarea no encontrada con ID: ${id}`);
    }
};

// Paso 9: Manejar los comandos pasados por línea de comandos

if (comando === 'agregar') {
    agregarTarea(descripcion);
} else if (comando === 'listar') {
    listarTareas();
} else if (comando === 'completar') {
    completarTarea(descripcion); // En este caso, descripcion es el ID de la tarea a completar
} else {
    console.log('Comando no reconocido. Use "agregar", "listar" o "completar".');
}
