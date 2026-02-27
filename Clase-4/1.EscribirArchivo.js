// PASO 1: importamos el modulo fs (file system) que es un modulo nativo 
// de node que nos permite interactuar con el sistema de archivos, 
// es decir, leer, escribir, eliminar archivos, etc.
// No es necesario instalarlo, ya que viene incluido con Node.js, 
// simplemente lo importamos para poder usarlo en nuestro codigo
// Si queremos convertir este codigo a un modulo ES6, tendriamos que 
// usar la sintaxis de import en lugar de require, se puede dar clic a los
// tres puntos al lado del nombre del archivo y seleccionar 'Convertir a modulo ES6',
// pero para eso tendriamos que configurar nuestro proyecto para que soporte modulos ES6, 
// lo cual no es el caso en este ejemplo, por lo tanto usamos require.

const fs = require('fs') 


// PASO 2: configuramos una variable de nombre datos que contiene los datos a persistir
const datos = "Ejemplo de datos que podemos escribir en un archivo"

// PASO 3: Utilizamos el modulo fs 'writeFile' que nos permita escribir datos en un archivo
// 1. WriteFile crea el archivo por nosotras, 
// Primer Parámetro: nombre del archivo que queremos crear, si el archivo ya existe, 
// se va a sobreescribir con los nuevos datos, si el archivo no existe, se va a crear
// un nuevo archivo con ese nombre y se van a escribir los datos en ese nuevo archivo.
// 2. Segundo Parámetro: especifica donde guardamos los datos, en este caso es una variable.
// 3. Tercer Parámetro: hace referencia a que hacer si ocurre un error. 
// En el caso de error, va a dar lugar a que se lance el error con un mensaje predeterminado 
// y si no hay error, va a imprimir un mensaje indicando que los datos han sido escritos en el archivo.

fs.writeFile('archivo.txt', datos, function (err) {
    if (!err) {
        console.log('Los datos han sido escritos en el archivo.txt');
    } else {
        throw err;
        // console.log('Ocurrio un error al escribir en el archivo.txt');
    }
})

// PASO 4 / EXTRAS:
// Errores: En este tipo de archivos tienen que ver principalmente con
// intentar escribir en un archivo dentro de un directorio en el cual no
// tenemos acceso/permisos para escribir

// Donde se guarda el archivo: El archivo se va a guardar exactamente en
// el mismo lugar donde se encuentre el script que lo ejecuta . en este caso
// este archivo si quisieramos que se guardara en otro ruta, tenemos que
// indicar antes de nombre 'archivo.txt' (la ruta completa)

// throw: se utiliza para lanzar una excepcion que es una forma de manejar
// errores o situaciones excepcionales en el codigo. Cuando se usa el throw
// podemos detener la ejecucion normal del codigo y transferir el control a
// un bloque de codigo que maneje el error, normalmente es un bloque try catch