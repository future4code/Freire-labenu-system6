import { Request, Response } from "express";
import { buscarTurma, updateModulo } from "../../data/turmaDataBase";

export default async function mudancaModuloTurma(req:Request,res:Response) {
    try {
        const {idTurma,modulo}= req.body

        if(!idTurma || !modulo){
            throw new Error("idTurma e modulo devem ser passados")
        }

        const turmaExiste = await buscarTurma(idTurma)
        
        if(!turmaExiste){
            throw new Error(`turma com id ${idTurma} nao existe`)
        }
        
        if(modulo === "0"){
            throw new Error("não é possivel alterar uma turma para o modulo 0")
        }


        await updateModulo(idTurma,modulo)

        res.status(200).send({message:"modulo alterado com sucesso!"})
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}