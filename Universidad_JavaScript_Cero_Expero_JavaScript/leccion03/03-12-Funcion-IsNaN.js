let miNumero = "18";

//No se puede convertir en un numero:
let edad = Number(miNumero);
console.log(edad);

//Para comparar si la variable es un numero o no es un numero:
if(isNaN(edad))
{
    console.log("No es un número");
}
else
{
    if(edad >= 18)
    {
        console.log("Puede votar");
    }
    else
    {
        console.log("Muy joven para votar");
    }
}