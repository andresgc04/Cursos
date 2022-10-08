let persona = {
    nombre: "Andres",
    apellido: "Guerrero",
    email: "andresguerrero@outlook.com",
    edad: 25,
    nombreCompleto: function () {
      return this.nombre + " " + this.apellido;
    },
  };

  //Para agregar una propiedad a un objeto:
  persona.telefono = '(829) 341-8220';
  console.log(persona);

  //Para eliminar una propiedad de un objeto:
  delete persona.telefono;
  console.log(persona);