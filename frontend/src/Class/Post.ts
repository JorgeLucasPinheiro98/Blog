import type { Categoria, Post } from "../types/Post";

class NewPost implements Post{
    id: string;
    titulo: string;
    slug: string;
    resumo: string;
    conteudo: string;
    imagem: string;
    data: string;
    categoria: Categoria;

    constructor(titulo: string, resumo: string, conteudo: string, imagem: string, data:string, categoria: Categoria) {
        this.id = ''
        this.titulo = titulo;
        this.slug = '';
        this.resumo = resumo;
        this.conteudo = conteudo;
        this.imagem = imagem;
        this.data = data;
        this.categoria = categoria;
    }
}