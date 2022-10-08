let persona = {
  nombre: "Andres",
  apellido: "Guerrero",
  email: "aguerrero@outlook.com",
  edad: 25,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona.nombreCompleto());