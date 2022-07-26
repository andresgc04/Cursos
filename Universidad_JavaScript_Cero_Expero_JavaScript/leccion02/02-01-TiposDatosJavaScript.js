/*
Ejemplos de tipos de datos en JavaScript
*/

//Tipos de datos:

//Tipo de datos cadena de texto (strings):
var nombre = "Andres";

console.log(nombre);

//Tipo de dato numerico (int):
var numero = 1000;
console.log(numero);

//Tipo de dato objecto (Object):
var objecto = {
    nombre: "Andres",
    apellido: "Guerrero",
    telefono: "(829) 341 8220"
};

console.log(objecto);

//Como preguntar para saber que tipo de datos es nuestra variable:
var nombre = "Andres";

console.log(nombre);

nombre = 10;
console.log(typeof(nombre));

//Tipo de dato booleano (boolean true, false):
var bandera = false;
console.log(bandera);
console.log(typeof(bandera));

//Tipo de dato función (Function):
function miFuncion(){};

console.log(miFuncion);
console.log(typeof(miFuncion));

//Tipo de dato simbolo (Symbol):

var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof(simbolo));

//Tipo de dato Clase (Class) tambien es una funcion (function):
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof(Persona));

//Tipo de datos Indefinido (Undefined):
var x;
console.log(x);
console.log(typeof(x));

//Tipo de datos ausencia de valor (null):
var y = null;
console.log(y);
console.log(typeof(y));

//Tipos de datos arreglos (Arrays) que son por igual objectos:
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof(autos));

//Asignar cadenas vacias:
var z = '';
console.log(z);
console.log(typeof(z));