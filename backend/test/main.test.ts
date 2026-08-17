import axios from "axios";
import type { Post } from "../types/Post.js";

test("deve chamar a api", async () => {
    const getResponse = await axios.get(`http://localhost:3000/posts`);

    expect(getResponse.status).toBe(200)
})

test("deve enviar um post", async () => {
    const dados: Post = {
        id: "2",
        titulo: "Inscrições abertas para o Campeonato Amador de Futebol de Piracanjuba",
        slug: "inscricoes-abertas-campeonato-amador-futebol-piracanjuba",
        resumo: "Times da cidade e região podem se inscrever gratuitamente até a próxima sexta-feira.",
        conteudo: "A Secretaria Municipal de Esportes confirmou o início do Campeonato Amador local. As equipes interessadas em participar devem enviar a documentação dos atletas até sexta-feira. Haverá premiação em troféus e dinheiro para os três primeiros colocados.",
        imagem: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800",
        data: "2026-08-10T14:15:00Z",
        categoria: "esportes"
      }

    await axios.post(`http://localhost:3000/posts`, dados);
    const getResponse = await axios.get(`http://localhost:3000/posts`);
    const posts = getResponse.data;
    const findPost = posts.find((posts: Post) => posts.id === dados.id);
    expect(findPost.id).toBe(dados.id);
    expect(findPost.titulo).toBe(dados.titulo);
    expect(findPost.slug).toBe(dados.slug);
    expect(findPost.resumo).toBe(dados.resumo);
    expect(findPost.conteudo).toBe(dados.conteudo);
    expect(findPost.imagem).toBe(dados.imagem);
    expect(findPost.data).toBe(dados.data);
    expect(findPost.categoria).toBe(dados.categoria);

})