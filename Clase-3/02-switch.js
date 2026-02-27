// Ejemplo: Determinar el día de la semana según un número

// Paso 1: Declaramos una variable con un número que representa el día de la semana
let diaNumero = 3; // Cambia este valor para probar diferentes casos (1 a 7)

// Paso 2: Usamos switch para determinar el día correspondiente
let diaNombre; // Declaramos una variable para guardar el nombre del día

switch (diaNumero) {
    case 1: // Si diaNumero es 1
        diaNombre = "Lunes";
        break; // Salimos del switch
    case 2: // Si diaNumero es 2
        diaNombre = "Martes";
        break;
    case 3: // Si diaNumero es 3
        diaNombre = "Miércoles";
        break;
    case 4: // Si diaNumero es 4
        diaNombre = "Jueves";
        break;
    case 5: // Si diaNumero es 5
        diaNombre = "Viernes";
        break;
    case 6: // Si diaNumero es 6
        diaNombre = "Sábado";
        break;
    case 7: // Si diaNumero es 7
        diaNombre = "Domingo";
        break;
    default: // Si diaNumero no es 1 a 7
        diaNombre = "Número inválido. Debe ser del 1 al 7.";
        break;
}

// Paso 3: Mostramos el resultado en la consola
console.log(diaNombre);

// Explicación:
// - switch evalúa la variable `diaNumero`.
// - cada `case` compara si `diaNumero` coincide con el valor especificado.
// - Si encuentra una coincidencia, ejecuta el código correspondiente.
// - El `break` es importante, si no se incluye, continuará evaluando el caso correcto.
// - Si no hay coincidencia, se ejecuta el bloque `default` (opcional).
