//Operadores Logicos:

//Operador Logico AND (&&):

//Ejemplo del operador AND (&&):
//Regresa verdadero (true) solo si ambos operandos son true (verdaderos). En cualquier otro caso regresa falso.

let a = 5;
let valMin = 0; valMax = 10;

if(a >= valMin && a <= valMax)
{
    console.log("Dentro del rango");
}
else
{
    console.log("Fuera del rango");
}

//Operador Logico OR (||):

//Ejemplo de OR (||):
//Regresa verdadero (true) si cualquier operando es verdadero (true).

let vacaciones = false, diaDescanso = false;

if(vacaciones || diaDescanso)
{
    console.log("El padre puede asistir al juego del hijo");
}
else
{
    console.log("El padre está ocupado");
}
