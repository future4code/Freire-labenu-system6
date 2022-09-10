import { app } from "./app";


app.post('/criar-turma',criarTurma)
app.get("/selecionar-turmas-ativas",selecionarTurmasAtivas)
app.post("/mudanca-modulo",mudancaModuloTurma)

app.post("/criar-estudante",criarEstudante)
app.get("/estudante/:nome",buscarEstudantePorNome)
app.post("/mudanca-estudante-turma",mudancaEstudanteTurma)

app.post("/criar-docente",criarDocente)
app.get("/buscar-docentes",buscarTodosOsDocentes)
app.post("/mudanca-docente-turma",mudancaDocenteTurma)