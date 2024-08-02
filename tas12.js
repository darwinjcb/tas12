'use strict'
// TAS12 - Métodos Array 
// Resolver los siguientes ejercicios:

/* • Crear una función que filtre los valores mayores a 10.00 
y redondearlos a 2 decimales como String. Retornando un array. 
*/
let nums = [13.676767, 3.123432, 5.34543543, 10.3452345]
function filtrarYRedondear(array) {
    let arregloValor = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10.00) {
            let valorRedondeado = array[i].toFixed(2);
            arregloValor.push(valorRedondeado);
        }
    }
    return arregloValor;
}

let resultado01 = filtrarYRedondear(nums);
alert(resultado01);

/* • Crear un array de objetos con la informacion de las asignaturas
de la carrera de Desarrollo de Software. 
• Crear una función que reciba como parámetro el array de las
asignaturas y un numero que indique el nivel. La función debe
retornar solo las asignaturas que pertenecen a ese nivel.
*/

let subject = [
    {
        id: 1,
        subject: 'MATEMÁTICA COMPUTACIONAL',
        types: 'BÁSICA',
        credits: 3,
        level: 1,
    },
    {
        id: 1,
        subject: 'METODOLOGÍAS PARA RESOLVER PROBLEMAS INFORMÁTICOS',
        types: 'BÁSICA',
        credits: 3,
        level: 1,
    },
    {
        id: 1,
        subject: 'BASE DE DATOS RELACIONALES',
        types: 'BÁSICA',
        credits: 2,
        level: 1,
    },
    {
        id: 1,
        subject: 'LAS TICS Y SOPORTE EN HARDWARE',
        types: 'BÁSICA',
        credits: 2,
        level: 1,
    },
    {
        id: 1,
        subject: 'PROGRAMACIÓN DE INTERFACES GRÁFICAS Y ESTRUCTURA DE DATOS',
        types: 'BÁSICA',
        credits: 2,
        level: 1,
    },
    {
        id: 1,
        subject: 'PROYECTO INTEGRADOR DE SABERES: CREACIÓN DE APLICACIONES DE ESCRITORIO',
        types: 'BÁSICA',
        credits: 1,
        level: 1,
    },
    {
        id: 1,
        subject: 'SISTEMAS DIGITALES PROGRAMABLES',
        types: 'PROFESIONAL',
        credits: 3,
        level: 2,
    },
    {
        id: 1,
        subject: 'SISTEMAS DE INFORMACIÓN',
        types: 'PROFESIONAL',
        credits: 3,
        level: 2,
    },
    {
        id: 1,
        subject: 'PROGRAMACIÓN ORIENTADA A OBJETOS',
        types: 'PROFESIONAL',
        credits: 2,
        level: 2,
    },
    {
        id: 1,
        subject: 'PROCESOS CONTABLES',
        types: 'PROFESIONAL',
        credits: 2,
        level: 2,
    },
    {
        id: 1,
        subject: 'GESTIÓN DE BASE DE DATOS',
        types: 'PROFESIONAL',
        credits: 2,
        level: 2,
    },
    {
        id: 1,
        subject: 'PROYECTO INTEGRADOR DE SABERES: CREACIÓN DE APLICACIONES DE ESCRITORIO CON BASE DE DATOS',
        types: 'PROFESIONAL',
        credits: 1,
        level: 2,
    },
    {
        id: 1,
        subject: 'PROGRAMACION DE APLICACIONES PARA DISPOSITIVOS MÓVILES',
        types: 'PROFESIONAL',
        credits: 3,
        level: 3,
    },
    {
        id: 1,
        subject: 'PROBABILIDADES Y PROCESOS ESTOCÁSTICOS',
        types: 'PROFESIONAL',
        credits: 3,
        level: 3,
    },
    {
        id: 1,
        subject: 'HERRAMIENTAS INFORMÁTICAS PARA EL DESPLIEGUE DE DIAGRAMAS',
        types: 'PROFESIONAL',
        credits: 2,
        level: 3,
    },
    {
        id: 1,
        subject: 'APLICACIONES TECNOLÓGICAS AUTÓNOMAS',
        types: 'PROFESIONAL',
        credits: 2,
        level: 3,
    },
    {
        id: 1,
        subject: 'SOFTWARE APLICATIVO',
        types: 'PROFESIONAL',
        credits: 2,
        level: 3,
    },
    {
        id: 1,
        subject: 'PROYECTO INTEGRADOR DE SABERES: CREACIÓN DE APLICACIONES WEB CON BASE A LA ARQUITECTURA CLIENTE SERVIDOR',
        types: 'PROFESIONAL',
        credits: 1,
        level: 3,
    },
    {
        id: 1,
        subject: 'COMUNICACIONES Y REDES DE DATOS',
        types: 'PROFESIONAL',
        credits: 3,
        level: 4,
    },
    {
        id: 1,
        subject: 'SISTEMAS OPERATIVOS',
        types: 'PROFESIONAL',
        credits: 2,
        level: 4,
    },
    {
        id: 1,
        subject: 'HERRAMIENTAS CASE',
        types: 'PROFESIONAL',
        credits: 2,
        level: 4,
    },
    {
        id: 1,
        subject: 'DERECHO Y SEGURIDAD INFORMÁTICA',
        types: 'PROFESIONAL',
        credits: 2,
        level: 4,
    },
    {
        id: 1,
        subject: 'TENDENCIAS TECNOLÓGICAS',
        types: 'PROFESIONAL',
        credits: 2,
        level: 4,
    },
    {
        id: 1,
        subject: 'DESARROLLO DE PROYECTOS DE SOFTWARE',
        types: 'UNIDAD DE INTEGRACIÓN CURRICULAR',
        credits: 3,
        level: 4,
    },
]

function filtrarAsignaturas(subject, nivel) {
    let arrayAsignaturas = [];
    for (let i = 0; i < subject.length; i++) {
        if (subject[i].level === nivel) {
            arrayAsignaturas.push(subject[i].subject);
        }
    }
    return arrayAsignaturas;
}
let nivelNumero = 1;
let resultado02 = filtrarAsignaturas(subject, nivelNumero);
alert(resultado02);

/* • Crear una función que calcule el promedio de un conjunto de
calificaciones almacenados en un array. La función debe recibir el array y devolver únicamente la parte entera del promedio.
• Crear un repositorio y subir los ejercicios.
*/
let calificaciones = [88, 70, 63, 90, 100];
function calcularPromedio(array) {
    if (array.length === 0) {
        return 0;
    }
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    let promedio = suma / array.length;
    return Math.floor(promedio);
}
let resultado03 = calcularPromedio(calificaciones);
alert("El promedio de las calificaciones es: \n" + resultado03); 
