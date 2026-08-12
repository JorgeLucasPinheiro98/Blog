import { response } from "../../database/database";
import type { Post } from "../../types/Post";
import style from "./style.module.css"

export function Cards() {
        const dates:Post[] = response;
        const listCards = dates.map(date => 
            <a key={date.id} href={date.slug}>
                <h1>{date.titulo}</h1>
                <p>{date.resumo}</p>
                <p>{date.data}</p>
                <hr />
            </a>
        )
    
    return (
        <div className={style.div}>{listCards}</div>
    )
}