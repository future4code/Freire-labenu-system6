import { Request, Response } from "express";
import { buscarTurmas } from "../../data/turmaDataBase";

export default async function selecionarTurmasAtivas(req: Request, res: Response){
    try {
        
        const turmasAtivas = await buscarTurmas()

        if(!turmasAtivas?.length){
            throw new Error("nao ha turmas ativas")
        }

        res.status(200).send(turmasAtivas)

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}