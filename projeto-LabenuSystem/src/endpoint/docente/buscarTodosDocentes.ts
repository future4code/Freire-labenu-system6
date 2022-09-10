import { Request, Response } from "express";
import { selectDocentes } from "../../data/docenteDataBase";

export default async function buscarTodosOsDocentes(req: Request, res: Response){
    try {
        
        const todosDocentes = await selectDocentes()

        if(!todosDocentes?.length){
            throw new Error("nao ha docentes cadastrados")
        }

        res.status(200).send(todosDocentes)

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}