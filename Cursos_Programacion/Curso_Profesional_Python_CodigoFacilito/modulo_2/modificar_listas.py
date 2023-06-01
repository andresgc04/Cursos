listas_cursos = ['Python', 'Django', 'Flask', 'Ruby', 'Java', 'Rust']

listas_cursos_2 = ['C', 'C++', 'Docker']

print(len(listas_cursos))

listas_cursos.append('MongoDB')
listas_cursos.append('C#')
listas_cursos.append('JavaScript')

listas_cursos.insert(1, 'Rails')
listas_cursos.insert(0, 'PyGame')

listas_cursos.extend(listas_cursos_2)

print(listas_cursos)

listas_cursos.remove('MongoDB')

del listas_cursos[0]

listas_cursos.clear()

print(listas_cursos)
