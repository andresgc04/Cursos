'''
lenguajes = 'Python Ruby Java Rust C++ C'
lenguajes_2 = 'Python//Ruby//Java//Rust//C++//C'

listado_lenguajes = lenguajes.split() #El método split separa las palabras y los espacios.

listado_lenguajes_2 = lenguajes_2.split('//')

print(listado_lenguajes)

print(listado_lenguajes_2)
'''

lenguajes = ['Python', 'Ruby', 'Java', 'Rust']

string_lenguajes = ' '.join(lenguajes)

print(string_lenguajes)

print(type(string_lenguajes))