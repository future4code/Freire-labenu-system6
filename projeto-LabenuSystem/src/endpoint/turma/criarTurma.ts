import { Request, Response } from "express";
import { insertTurma } from "../../data/turmaDataBase";
import { Turma } from "../../types/turma";

export default async function criarTurma(req: Request, res: Response) {
    try {
        const { nome } = req.body

        if (!nome) {
            throw new Error("o nome da turma deve ser passado")
        }

        const novaTurma: Turma = {
            id: Date.now().toString(),
            nome
        }

        await insertTurma(novaTurma)

        res.status(201).send({ message: "turma criada com sucesso" })
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}