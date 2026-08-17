export interface Post {
    id: string
    titulo: string | undefined;
    slug: string
    resumo: string | undefined;
    conteudo: string | undefined;
    imagem: string | undefined;
    data: string | undefined;
    categoria: string | undefined;
}