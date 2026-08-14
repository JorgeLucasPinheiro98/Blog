import { NewPost } from "../../Class/Post";
import { response } from "../../database/database";


export function AddCards() {
    const handleAction = async (FormData: FormData) => {
        const titulo = FormData.get('titulo')?.toString();
        const resumo = FormData.get('resumo')?.toString();
        const conteudo = FormData.get('conteudo')?.toString();
        const imagem = FormData.get('imagem')?.toString();
        const categoria = FormData.get('categoria')?.toString();

        const post = new NewPost(titulo, resumo, conteudo, imagem, categoria)
        console.log(post)

        response.push(post);
    }

    return (
        <form action={handleAction}>
            <input type="text" name="titulo"/>
            <input type="text" name="resumo"/>
            <input type="text" name="conteudo"/>
            <input type="text" name="imagem"/>
            <input type="text" name="categoria"/>
            <button type="submit">Enviar</button>
        </form>
    )
}