import express from "express"
import cors from "cors";
import pgp from "pg-promise"
import type { Response, Request } from "express";
import type { Post } from "../types/Post.ts"
import { NewPost } from "./entity/posts";


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
const connection = pgp()("postgres://postgres:1234@localhost:5432/app")

app.get("/posts", async (req: Request, res: Response) => {
    const arrayDados = await connection.query("select * from database_blog.posts")
    // console.log(arrayDados[arrayDados.length - 1])
    res.status(200).json(arrayDados);
})

app.post("/posts", async (req: Request, res: Response) => {
    const dados: Post = new NewPost (
        req.body.titulo,
        req.body.resumo,
        req.body.conteudo,
        req.body.imagem,
        req.body.categoria,
    )

    const post = await connection.query("insert into database_blog.posts (titulo, slug, resumo, conteudo, imagem, data, categoria) values ($1, $2, $3, $4, $5, $6, $7)", [
        dados.titulo,
        dados.slug,
        dados.resumo,
        dados.conteudo,
        dados.imagem,
        dados.data,
        dados.categoria
    ])
    // console.log(post)
    res.status(201).json(dados)

})

app.listen(port, () => console.log(`Server Runing in port: ${port}`));