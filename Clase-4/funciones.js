// Una función es un bloque de código diseñado para realizar una tarea específica.
// Las funciones se definen una vez y se pueden ejecutar varias veces.
// Sintaxis básica de una función
function nombreDeLaFuncion(parámetros) {
    // Código a ejecutar
    // Puedes usar la palabra clave 'return' para devolver un valor desde la función
    return resultado;
}

// Cuando una función devuelve un valor, puedes almacenarlo en una variable o usarlo directamente, 
// para realizar cálculos, u otras operaciones, o mostrarlo en la consola.

// Ejemplo de una función que suma dos números y devuelve el resultado
// function sumar(a, b) {
//     return a + b;
// }
// Llamando a la función y almacenando el resultado en una variable
// let resultadoSuma = sumar(5, 3);
// console.log("El resultado de la suma de 5 y 3 es: " + resultadoSuma); // Salida: El resultado de la suma es: 8

// function compras(precio, cantidad) {
//     return precio * cantidad;
// }
// Llamando a la función y almacenando el resultado en una variable
// let totalCompra = compras(10000, 5);
// let totalCompraConDescuento = compras(50000, 5) * 0.9; // Aplicando un descuento del 10%
// console.log("El total de la compra 5 productos a $10000 es: " + totalCompra); // Salida: El total de la compra es: 50000
// console.log("El total de la compra 5 productos a $50000 con descuento del 10% es: " + totalCompraConDescuento); // Salida: El total de la compra con descuento es: 225000

// function saludo(nombre) {
//     return "Hola, " + nombre + "! Bienvenido/a a la programación en JavaScript.";
// }
// // Llamando a la función y almacenando el resultado en una variable
// let mensajeSaludo = saludo("Alicia");
// console.log(mensajeSaludo); // Salida: Hola, Alicia! Bienvenido/a a la programación en JavaScript.

// console.log(mensajeSaludo + " Espero que disfrutes aprendiendo a programar."); // Salida: Hola, Alicia! Bienvenido/a a la programación en JavaScript. Espero que disfrutes aprendiendo a programar.

// Funciones Void: Son funciones que no devuelven ningún valor. 
// Se utilizan para realizar acciones, como mostrar mensajes en la consola 
// o modificar el DOM, sin necesidad de devolver un resultado específico.
// function mostrarMensaje() {
//     console.log("Este es un mensaje desde una función void.");
// }

// mostrarMensaje(); // Salida: Este es un mensaje desde una función void.
// Esto no se puede hacer con una función void, ya que no devuelve ningún valor:
// let resultado = mostrarMensaje(); // Esto no funcionará, ya que mostrarMensaje no devuelve ningún valor
// console.log(resultado); // Salida: undefined, porque mostrarMensaje no devuelve nada

// Tenemos las funciones declarativas, que se definen utilizando la palabra clave 'function' 
// seguida del nombre de la función y los parámetros entre paréntesis. Las funciones anteriores 
// son ejemplos de funciones declarativas.

// También existen las funciones anónimas o funciones expresadas, que son funciones sin un 
// nombre específico. Se pueden asignar a variables o pasarlas como argumentos a otras funciones. 
// Las funciones anónimas son útiles para tareas como callbacks o funciones de orden superior.

// Ejemplo de una función anónima asignada a una variable
// let multiplicar = function(a, b) {
    
//     return a * b;
//     //console.log("Esta línea no se ejecutará porque está después del return.");
// };

// Llamando a la función anónima a través de la variable
// let resultadoMultiplicacion = multiplicar(4, 6);
// console.log("El resultado de la multiplicación de 4 y 6 es: " + multiplicar(4, 6)); // Salida: El resultado de la multiplicación de 4 y 6 es: 24


// const dividir = function(a, b) {
//     if (b === 0) {
//         return "Error: No se puede dividir por cero.";
//     }
//     return a / b;
// };

// let resultadoDivision = dividir(10, 2);
// console.log("El resultado de la división de 10 entre 2 es: " + resultadoDivision); // Salida: El resultado de la división de 10 entre 2 es: 5

// Diferencias entre funciones declarativas y funciones anónimas(expresadas):
// 1. Las funciones declarativas tienen un nombre específico, 
// mientras que las funciones anónimas(expresadas) no tienen un nombre y se asignan a variables.
// 2. Las funciones declarativas pueden ser llamadas antes de su definición debido 
// al hoisting, mientras que las funciones anónimas(expresadas) no pueden ser llamadas antes de 
// su asignación a una variable.
// 3. Las funciones declarativas son más fáciles de leer y entender, ya que tienen 
// un nombre descriptivo, mientras que las funciones anónimas(expresadas) pueden ser menos claras 
// si no se les asigna un nombre significativo a la variable.



// Metodo repeat: Es un método de las cadenas de texto en JavaScript que permite repetir
//  una cadena un número específico de veces.
// Sintaxis: cadena.repeat(n), donde 'cadena' es la cadena que deseas repetir y 'n' es 
// el número de veces que deseas repetirla.

// Ejemplo dentro de una función

// function hacerEco(mensaje, veces) {
//     return mensaje.repeat(veces);
// }

// let eco = hacerEco("💕", 50);
// console.log(eco); // Salida: **************************************************

// function hacerHelados(cantidad) {
//     return "🍦".repeat(cantidad);
// }

// let helados = hacerHelados(5);
// console.log(helados); // Salida: 🍦🍦🍦🍦🍦




// Funciones recursivas: Son funciones que se llaman a sí mismas para resolver un problema. 
// La recursión es una técnica poderosa que permite resolver problemas complejos de manera elegante 
// y eficiente. Sin embargo, es importante tener cuidado al usar la recursión, ya que puede llevar
// a problemas de rendimiento o incluso a errores de desbordamiento de pila si no se maneja correctamente.

// Ejemplo de una función recursiva para calcular el factorial de un número
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// let resultadoFactorial = factorial(5);
// console.log("El factorial de 5 es: " + resultadoFactorial); // Salida: El factorial de 5 es: 120



// tipos de parametros en funciones:


// Parámetros por defecto: Son parámetros que tienen un valor predeterminado si no se proporciona 
// un valor al llamar a la función. Esto permite que la función se ejecute sin necesidad de proporcionar
// todos los argumentos, lo que puede ser útil para funciones con muchos parámetros o para proporcionar 
// valores comunes como predeterminados.

// Ejemplo de una función con parámetros por defecto
function saludar(nombre = "Invitado") {
    return "Hola, " + nombre + "! Bienvenido/a a la programación en JavaScript.";
}

let saludo = saludar();
console.log(saludo); // Salida: Hola, Invitado! Bienvenido/a a la programación en JavaScript.

let saludoPersonalizado = saludar("Natalia");
console.log(saludoPersonalizado); // Salida: Hola, Natalia! Bienvenido/a a la programación en JavaScript.


// Parametros opcionales: Son parámetros que no son obligatorios al llamar a una función. 
// Puedes omitirlos al llamar a la función, y la función seguirá funcionando correctamente. 
// Esto se puede lograr utilizando parámetros por defecto o simplemente no proporcionando un 
// valor para esos parámetros.

// Ejemplo de una función con parámetros opcionales utilizando parámetros por defecto
function crearUsuario(nombre, edad = 18) {
    return {
        nombre: nombre,
        edad: edad
    };
}

let usuario1 = crearUsuario("Carlos");
console.log(usuario1); // Salida: { nombre: 'Carlos', edad: 18 }

let usuario2 = crearUsuario("Ana", 25);
console.log(usuario2); // Salida: { nombre: 'Ana', edad: 25 }

// Parámetros de función o argumentos obligatorios: Son los valores que se pasan a una función 
// cuando se llama. Estos son los que venimos utilizando en los ejemplos anteriores, como 'nombre' 
// en la función 'saludar' o 'precio' y 'cantidad' en la función 'compras'.
// Estos parámetros se definen en la declaración de la función y se utilizan dentro de la función para realizar operaciones o cálculos. 
// Los parámetros pueden ser de cualquier tipo de dato, como números, cadenas, objetos, arrays, etc.

// Parámetros rest (lo vemos más adelante): Permiten a una función aceptar un número variable de 
// argumentos como un array.
// Lo hace utilizando la sintaxis de tres puntos (...) antes del nombre del parámetro, lo que indica que
// todos los argumentos adicionales se agruparán en un array con ese nombre de parámetro.
// Parámetros destructurados (lo vemos más adelante): Permiten extraer valores de objetos o arrays directamente en los 
// parámetros de la función, lo que facilita el acceso a los datos dentro de la función.



// Funciones de orden superior: Son funciones que pueden recibir otras funciones como argumentos
//  o devolver funciones como resultado. 
// Las funciones de orden superior son una característica fundamental de la programación funcional 
// y se utilizan para crear funciones más flexibles y reutilizables.



// Funciones flecha (Arrow Functions): Son una forma más concisa de escribir funciones en JavaScript.
// Se introdujeron en ES6 y utilizan la sintaxis de flecha (=>) para definir funciones. 
// Las funciones flecha son especialmente útiles para funciones de una sola línea o para funciones 
// que se utilizan como callbacks.

// Seguimos la clase que viene.
