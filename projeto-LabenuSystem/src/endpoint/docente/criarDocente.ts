import { Request, Response } from 'express';
import { insertDocente } from "../../data/docenteDataBase";
import { buscarTurma } from "../../data/turmaDataBase";
import { Docente } from "../../types/docentes";

export default async function criarDocente(req: Request, res: Response) {
    try {
        const { nome, email, dataNascimento, turmaId } = req.body

        if(!nome || !email || !dataNascimento || !turmaId){
            throw new Error("Esta faltando parametros")
        }

        const turmaExiste = await buscarTurma(turmaId)
        
        if(!turmaExiste){
            throw new Error(`turma com id ${turmaId} nao existe`)
        }

        const novoDocente:Docente ={
            id: Date.now().toString(),
            nome,
            email,
            dataNascimento,
            turmaId
        }

      
        await insertDocente(novoDocente)

        res.status(201).send({ message: "Docente criado com sucesso" })
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}
