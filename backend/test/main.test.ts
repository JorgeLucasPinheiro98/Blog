import axios from "axios"

type Posts = {
    id: string
    name: string
}

test("deve chamar a api", async () => {
    const getResponse = await axios.get(`http://localhost:3000/posts`);

    expect(getResponse.status).toBe(200)
})

test("deve enviar um post", async () => {
    const dados: Posts = {
        id: crypto.randomUUID(),
        name: "John Doe",
    }

    await axios.post(`http://localhost:3000/posts`, dados);
    const getResponse = await axios.get(`http://localhost:3000/posts`);
    const posts = getResponse.data
    const findPost = posts.find((posts: Posts) => posts.id === dados.id)
    expect(findPost.id).toBe(dados.id)
    expect(findPost.name).toBe("John Doe")

})