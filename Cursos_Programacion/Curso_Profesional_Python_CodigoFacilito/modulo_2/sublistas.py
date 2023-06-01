listas_cursos = ['Python', 'Django', 'Flask', 'Ruby', 'Java', 'Rust']
#                   0          1        2        3       4       5

#Para generar una sublista podemos indicar el indice inicial y por igual indicar el indice final, ejemplo: [start:end]
#[start:] -> Obtenemos los últimos elementos de la lista.
#[:end] -> Obtenemos los primeros elementos de la lista.
#[start:end:skip] -> Obtenemos una sublista indicandole los saltos que va a tener dicha sublista.

sub_lista = listas_cursos[1:4]

sub_lista2 = listas_cursos[1:]

sub_lista3 = listas_cursos[:4]

sub_lista4 = listas_cursos[:]

sub_lista5 = listas_cursos[::-1]

print(sub_lista)
print(sub_lista2)
print(sub_lista3)
print(sub_lista4)
print(sub_lista5)