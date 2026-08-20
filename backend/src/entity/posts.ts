import type { Post } from "../../types/Post.js";

export class NewPost implements Post{
    id: string
    titulo: string;
    slug: string
    resumo: string;
    conteudo: string;
    imagem: string;
    data: string;
    categoria: string;

    constructor(
        titulo: string, 
        resumo: string, 
        conteudo: string, 
        imagem: string, 
        categoria: string) 
        
        {
        this.id = "";
        this.titulo = titulo;
        this.slug = this.gerarSlug(titulo)
        this.resumo = resumo;
        this.conteudo = conteudo;
        this.imagem = imagem;
        this.data = new Date().toISOString();
        this.categoria = categoria;
    }

    gerarSlug(texto: string): string {
        return texto
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "") // Remove acentos
          .replace(/[^\w\s-]/g, "")        // Remove caracteres especiais
          .replace(/\s+/g, "-")            // Substitui espaços por hífens
          .replace(/--+/g, "-")            // Remove hífens duplicados
          .trim();
      }
}