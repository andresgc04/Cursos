# * ->Lista de elementos restantes no asignados o no desempaquetados.
# _ -> Omitir Valores

numeros = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

#uno, dos, tres, cuatro, *resto_valores = numeros

uno, dos, tres, cuatro, *_, nueve, diez = numeros

print(uno)
print(dos)
print(tres)
print(cuatro)

print(nueve)
print(diez)

#print(resto_numeros)