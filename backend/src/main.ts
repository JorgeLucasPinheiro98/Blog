import express from "express"
import cors from "cors";
import type { Response, Request } from "express";
import type { Post } from "../types/Post.ts"

const app = express();
const port = 3000

app.use(express.json())
app.use(cors())


const arrayDados:Post[] = [{
    id: "1",
    titulo: "Obras de revitalização da Praça Central avançam para fase final",
    slug: "obras-revitalizacao-praca-central-avancam-fase-final",
    resumo: "Projeto inclui nova iluminação em LED, paisagismo renovado e espaço para feirantes locais.",
    conteudo: "As obras de revitalização na Praça Central estão em ritmo acelerado. Segundo a secretaria de infraestrutura, a instalação das novas luminárias de LED foi concluída e a etapa atual foca no assentamento do novo piso e paisagismo. A expectativa é que o espaço seja entregue à comunidade até o fim deste mês.",
    imagem: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    data: "2026-08-11T08:30:00Z",
    categoria: "cidade"
  }]

app.get("/posts", (req: Request, res: Response) => {
    res.status(200).json(arrayDados);
})

app.post("/posts", (req: Request, res: Response) => {
    const dados: Post = {
        id: req.body.id,
        titulo: req.body.titulo,
        slug: req.body.slug,
        resumo: req.body.resumo,
        conteudo: req.body.conteudo,
        imagem: req.body.imagem,
        data: req.body.data,
        categoria: req.body.categoria,
    }

    console.log(dados)
    arrayDados.push(dados)
    res.status(201).json(dados)
})

app.listen(port, () => console.log(`Server Runing in port: ${port}`));