import express from "express"
import type { Response, Request } from "express";

const app = express();
const port = 3000

app.use(express.json())

type Post = {
    id: string
    name: string
}

const arrayDados:Post[] = []

app.get("/posts", (req: Request, res: Response) => {
    res.status(200).json(arrayDados);
})

app.post("/posts", (req: Request, res: Response) => {
    const dados: Post = {
        id: req.body.id,
        name: req.body.name
    }

    console.log(dados)
    arrayDados.push(dados)
    res.status(201).json(dados)
})

app.listen(port, () => console.log(`Server Runing in port: ${port}`));