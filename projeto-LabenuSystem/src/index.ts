import { app } from './app';
import criarTurma from './endpoint/turma/criarTurma';
import selecionarTurmasAtivas from "./endpoint/turma/selecionarTurmasAtivas";
import mudancaModuloTurma from './endpoint/turma/mudancaModuloTurma';
import buscarTodosOsDocentes from "./endpoint/docente/buscarTodosDocentes";
import criarDocente from "./endpoint/docente/criarDocente";
import mudancaDocenteTurma from './endpoint/docente/mudancaDocenteTurma';

app.post('/criar-turma', criarTurma); 
app.get("/selecionar-turmas-ativas", selecionarTurmasAtivas)
app.post("/mudanca-modulo", mudancaModuloTurma)    


app.post("/criar-docente",criarDocente)
app.get("/buscar-docentes",buscarTodosOsDocentes)
app.post("/mudanca-docente-turma",mudancaDocenteTurma)