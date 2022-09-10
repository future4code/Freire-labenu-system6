import { Request, Response } from "express";
import { selectDocente, updateDocente } from "../../data/docenteDataBase";
import { buscarTurma } from "../../data/turmaDataBase";

export default async function mudancaDocenteTurma(req:Request,res:Response) {
    try {
        const { idDocente, turma } = req.body

        if (!idDocente || !turma) {
            throw new Error("idDocente e turma devem ser passados")
        }

        const turmaExiste = await buscarTurma(turma)

        if (!turmaExiste) {
            throw new Error(`turma com id ${turma} nao existe`)
        }

        const docenteExiste = await selectDocente(idDocente)

        if (!docenteExiste) {
            throw new Error(`docente com id ${idDocente} nao existe`)
        }
        console.log(docenteExiste);
        

        await updateDocente(idDocente, turma)

        res.status(200).send({ message: "docente alterado de turma com sucesso!" })
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}