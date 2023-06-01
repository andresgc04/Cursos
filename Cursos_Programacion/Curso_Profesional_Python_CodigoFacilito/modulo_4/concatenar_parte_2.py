nombre = 'Eduardo Ismael'
apellido = 'García'

#nombre_completo = 'Mr. {} {} {}.'.format(nombre, apellido, 'Pérez')

nombre_completo = 'Mr. {nombre} {primer_apellido} {segundo_apellido}.'.format(
    nombre = nombre,
    primer_apellido = apellido,
    segundo_apellido = 'Pérez'
)

print(nombre_completo)