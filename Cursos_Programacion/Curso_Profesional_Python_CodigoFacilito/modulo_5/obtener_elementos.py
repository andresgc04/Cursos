diccionarios = {'a': 1, 'b' : 2, 'c' : 3, 'd' : 4}

#Para conocer el valor de un diccionario mediante su llave.
valor = diccionarios['d']

print(valor)

print('z' in diccionarios)

#Método Get se utiliza para obtener el valor de una llave de un diccionario.
valor_2 = diccionarios.get('c', 'La llave no existe en el diccionario.')

print(valor_2)

#Método SetDefault sirve para asignar un valor por defecto.
valor_3 = diccionarios.setdefault('e', 5)

print(valor_3)