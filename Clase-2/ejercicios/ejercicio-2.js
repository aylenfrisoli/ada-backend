// Ejercicio 2: Conversión de Objetos JavaScript a JSON
// 1.En la misma carpeta clase2, crea un nuevo archivo llamado
// actividad2.js.
// 2.Crea un objeto en JavaScript que represente a un estudiante con las
// siguientes propiedades: nombre, edad, curso, notas (un array de
// números).
// Instrucciones:
// • Convierte este objeto a una cadena JSON usando JSON.stringify().
// • Muestra la cadena JSON en la consola.
// • Luego, convierte la cadena JSON de nuevo a un objeto utilizando
// JSON.parse() y muestra el objeto en la consola.

// Creación del objeto JavaScript que representa a un estudiante
const estudiante = {
    nombre: "Ana Pérez",
    edad: 22,
    curso: "Desarrollo Web",
    notas: [85, 90, 78]
};

// Convertir el objeto a una cadena JSON usando JSON.stringify()
const estudianteJSON = JSON.stringify(estudiante);

// Mostrar la cadena JSON en la consola
console.log(estudianteJSON);

// Convertir la cadena JSON de nuevo a un objeto utilizando JSON.parse()
const estudianteObjeto = JSON.parse(estudianteJSON);

// Mostrar el objeto en la consola
console.log(estudianteObjeto);