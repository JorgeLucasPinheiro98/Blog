import { response } from "../../database/database";
import type { Post } from "../../types/Post";

export function Cards() {
        const dates:Post[] = response;
        const listCards = dates.map(date => 
            <li key={date.id}>
                <h1>{date.titulo}</h1>
                <p>{date.resumo}</p>
                <p>{date.conteudo}</p>
                <p>{date.data}</p>
                <hr />
            </li>
        )
    
    return (
        <div>{listCards}</div>
    )
}