let persona = {
  nombre: "Andres",
  apellido: "Guerrero",
  email: "andresguerrero@outlook.com",
  edad: 25,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

//Utilizando distintas formas para imprimir un objeto:

//Concatenando cada valor de cada propiedad:
console.log(persona.nombre + ", " + persona.apellido);

//Utilizando For In:
for (nombrePropiedad in persona) {
  console.log(persona[nombrePropiedad]);
}

//Utilizando Object.values():
let personaArray = Object.values(persona);
console.log(personaArray);

//Utilizando Json.stringify():
let personaString = JSON.stringify(persona);
console.log(personaString);
