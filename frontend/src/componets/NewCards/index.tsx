import { NewPost } from "../../Class/Post";
import type { Post } from "../../types/Post";
import style from "./style.module.css"


interface AddCardsProps {
    onPostAdded: (newPost: Post) => void;
}

export function AddCards({ onPostAdded }: AddCardsProps) {
    const handleAction = async (FormData: FormData) => {
        const titulo = FormData.get('titulo')?.toString();
        const resumo = FormData.get('resumo')?.toString();
        const conteudo = FormData.get('conteudo')?.toString();
        const imagem = FormData.get('imagem')?.toString();
        const categoria = FormData.get('categoria')?.toString();

        const post = new NewPost(titulo, resumo, conteudo, imagem, categoria)

        onPostAdded(post);
    }

    return (
        <form action={handleAction} className={style.form}>
      <input type="text" name="titulo" placeholder="Título" />
      <input type="text" name="resumo" placeholder="Resumo" />
      <input type="text" name="conteudo" placeholder="Conteúdo" />
      <input type="text" name="imagem" placeholder="URL da imagem" />
      <input type="text" name="categoria" placeholder="Categoria" />
      <button type="submit">Enviar</button>
    </form>
    )
}