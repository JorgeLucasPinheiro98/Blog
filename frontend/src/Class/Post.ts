import type { Post } from "../types/Post";

export class NewPost implements Post{
    id: string
    titulo: string | undefined;
    slug: string
    resumo: string | undefined;
    conteudo: string | undefined;
    imagem: string | undefined;
    data: string | undefined;
    categoria: string | undefined;

    constructor(
        titulo: string | undefined, 
        resumo: string | undefined, 
        conteudo: string | undefined, 
        imagem: string | undefined, 
        categoria: string | undefined) 
        
        {
        this.id = crypto.randomUUID();
        this.titulo = titulo;
        this.slug = this.id
        this.resumo = resumo;
        this.conteudo = conteudo;
        this.imagem = imagem;
        this.data = new Date().toISOString();
        this.categoria = categoria;
    }
}