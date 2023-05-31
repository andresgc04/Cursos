//Tipos primitivos:
let x = 10;

function cambiarValor(a) {
  a = 20;
}

//Paso por valor:
cambiarValor(x); //Le pasamos el valor de x que es 10.
console.log(x);
console.log(a);
