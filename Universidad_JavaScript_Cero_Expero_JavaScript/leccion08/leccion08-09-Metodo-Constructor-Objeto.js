//Creando funcion constructora de objetos tipo Persona:
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//Utilizando la funcion constructora de objetos tipo persona:
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre);

//Cambiando el valor de un atributo mediante la funcion constructora de objetos tipo Persona:
padre.nombre = 'Carlos';

console.log(padre);
console.log(madre);