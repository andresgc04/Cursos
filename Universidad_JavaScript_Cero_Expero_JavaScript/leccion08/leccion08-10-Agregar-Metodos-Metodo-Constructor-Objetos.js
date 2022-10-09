//Creando funcion constructora de objetos tipos Personas:
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

//Utilizando la funcion constructora de objetos tipo Persona:
let padre = new Persona("Juan", "Perez", "jperez@mail.com");
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log(madre);
console.log(madre.nombreCompleto());

//Cambiando el valor de un atributo mediante la funcion constructora de objetos tipo Persona:
padre.nombre = 'Carlos';

console.log(padre);
console.log(madre);
