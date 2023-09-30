import express from 'express';
import mongoose, { Number } from 'mongoose';
import cors from 'cors';

export class App{
    private express: express.Application;
    private port = 3000

    constructor(){
        this.express = express();
        this.listen();
       // this.database()
    }

    public getApp(): express.Application{
        return this.express
    }

    private listen(): void{

        this.express.listen(this.port, () =>{
            console.log(`Servidor rodando na porta ${this.port}`)
        })
    }

    public ateMesmoIsso(): void{
        console.log('Até mesmo isso?! 168.720')
    }

    public Somar(n1: number, n2: number): number{
        const soma = n1 + n2;

        return soma;
    }

    private database(): void{
        mongoose.connect('mongodb+srv://kingdacis:<password>@cluster0.xfyjsj1.mongodb.net/?retryWrites=true&w=majority', {
           // useUnifiedTopology: true,
            //useNewUrlParser: true
        });
    }
}
