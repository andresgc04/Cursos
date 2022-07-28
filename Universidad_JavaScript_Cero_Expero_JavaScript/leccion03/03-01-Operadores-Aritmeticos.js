let a = 3, b=2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a-b;
console.log("Resultado de la resta: " + z);

z = a*b;
console.log("Resultado de la multiplicación: " + z);

z = a/b;
console.log("Resultado de la división: " + z);

z = a%b;
console.log("Resultado de la operación modulo (residuo): " + z);

z = a**b;
console.log("Resultado del operador exponente: " + z);

//Incremento:

//Pre-Incremento (el operador ++ antes de la variable):
z= ++a;

console.log(a);
console.log(z);

//Post-Incremento (el operador ++ despues de la variable):
z = b++;
console.log(b);
console.log(z);

//Decremento:

//Pre-Decremento (el operador -- antes de la variable):
z = --a;
console.log(a);
console.log(z);

//Post-Decremento (el operador -- despues de la variable):
z = b--;
console.log(b);
console.log(z);