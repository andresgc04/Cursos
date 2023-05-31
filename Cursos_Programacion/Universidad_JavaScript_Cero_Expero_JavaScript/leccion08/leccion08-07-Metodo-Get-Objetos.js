//Utilizando el metodo GET:
let persona = {
  nombre: "Andres",
  apellido: "Guerrero",
  email: "andresguerrero@outlook.com",
  edad: 25,
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombreCompleto);
