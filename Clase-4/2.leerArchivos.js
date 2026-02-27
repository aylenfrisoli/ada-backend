// PASO 1: Importamos el modulo fs (file system) 
const fs = require('fs')

// PASO 2: Usamos el metodo reafile
// 1 Argumento: Archivo a leer. Si el archivo no esta en el mismo directorio, colocar la ruta
// 2 Argumento: La codificacion, utf-8 (unicode transformation format 8bits) y es una codificacion 
// de caracteres que se utilizan para presentar texto en computadoras y en la web y 
// es la codificacion mas común y ampliamente utilizada, ya que es compatible con una amplia gama
// de caracteres y simbolos de diferentes idiomas y sistemas de escritura.
// 3 Argumento: Es una funcion de callback que se ejecuta cuando se completa la lectura del archivo.
// A. Parametro 1 err: Un objeto de error que indica si algo salio mal durante la lectura del archivo
// B. Parametro 2 data: Un objeto que contiene el contenido del archivo leido si no hubo error

// El metodo readFile es asincrono, lo que significa que no bloquea la ejecucion del programa
//  mientras se lee el archivo.

// En este ejemplo, se lee el archivo 'archivo.txt' con la codificacion 'utf-8'. Si no hay errores,
// se imprime el contenido del archivo en la consola. Si ocurre un error durante la lectura del
// archivo, se lanza una excepcion utilizando throw.

// Podriamos armar una variable que contenga la ruta del archivo y luego usar esa variable 
// en el metodo readFile, de esta forma:

// const rutaArchivo = 'C:\\ruta\\al\\archivo.txt';

fs.readFile('archivo.txt', 'utf-8', function (err, data) {
    if (!err) {
        console.log(data);
    } else {
        throw err;
    }
})

// throw: se utiliza para lanzar una excepcion que es una forma de manejar errores o situaciones 
// excepcionales en el codigo. Cuando se usa el throw podemos detener la ejecucion normal del 
// codigo y transferir el control a un bloque de codigo que maneje el error, normalmente es un bloque 
// try catch