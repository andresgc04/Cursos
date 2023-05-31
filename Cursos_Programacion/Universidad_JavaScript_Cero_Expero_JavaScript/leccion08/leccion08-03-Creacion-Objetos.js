//Primera forma para crear objetos en javaScript:
let persona = new Object();
persona.nombre = "Andres";
persona.direccion = "Doctor Teofilo Ferry #165";
persona.telefono = "(829) 341-8220";

console.log(persona.telefono);

//Segunda forma para crear objetos en javaScript (Buenas Practicas y Certificada para trabajar):
let persona2 = {
  nombre: "Andres",
  direccion: "Doctor Teofilo Ferry #165",
  telefono: "(829) 341-8220",
};

console.log(persona2.telefono);
