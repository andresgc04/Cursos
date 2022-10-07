//Diferencia Entre Función de tipo expresión y Función de tipo flecha:

//Declaración Función de tipo expresión:
let sumar = function(a,b){return a + b};
let resultado = sumar(1,2);
console.log(resultado);

//Declaración Función de tipo flecha:
const sumarFuncionTipoFlecha = (a,b) => a + b;
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);