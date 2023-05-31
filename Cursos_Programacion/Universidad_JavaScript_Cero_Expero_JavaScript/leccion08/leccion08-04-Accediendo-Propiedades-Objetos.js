let persona = {
  nombre: "Andres",
  apellido: "Guerrero",
  email: "andresguerrero@outlook.com",
  edad: 25,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

//Formas para acceder a las propiedades de los objetos:
console.log(persona.nombre);
console.log(persona['apellido']);

//Utilizando For in para poder acceder a las propiedades de los objetos:
for(nombrePropiedad in persona){
    console.log(nombrePropiedad); //Para poder acceder a las propiedades.
    console.log(persona[nombrePropiedad]); //Para acceder a los valores de las propiedades.
}
