export type Categoria = "cidade" | "regiao" | "publico" | "esportes" | "eventos";

export interface Post {
    id: string;
    titulo: string;
    slug: string;
    resumo: string;
    conteudo: string;
    imagem: string;
    data: string;
    categoria: Categoria;
}