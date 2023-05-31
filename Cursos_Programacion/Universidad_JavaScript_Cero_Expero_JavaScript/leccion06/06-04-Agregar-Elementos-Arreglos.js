const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

//Agregar un elemento en la ultima posición del arreglo:
autos.push('Audi');
console.log(autos);

//Nueva forma de agregar elementos en la ultima posición del arreglo, pero sin dejar indices vacios:
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);

//Agregar Elementos en indices superiores del arreglo y dejar huecos o espacios. Esto no es recomendable:
autos[6] = 'Porshe';
console.log(autos);