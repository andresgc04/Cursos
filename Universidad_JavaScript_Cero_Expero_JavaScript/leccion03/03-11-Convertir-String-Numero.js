const e = require("express");

let miNumero = "22";

console.log(miNumero);
console.log(typeof(miNumero));

//Convertir string a numero(int);

let edad = Number(miNumero);
console.log(typeof(edad));

if(edad >= 18)
{
    console.log("La persona puede votar");
}
else
{
    console.log("Muy joven para votar");
}

//Realizando el ejercicio con el operador ternario:
let resultado = (edad >= 18) ? "La persona puede votar" : "Muy joven para votar";
console.log(resultado);