import { Headers } from './componets/Header'
import { Cards } from './componets/Cards'
import './App.css'
import { AddCards } from './componets/NewCards'
import { useState } from 'react'
import type { Post } from './types/Post'
import { response } from './database/database'

function App() {
  const [posts, setPosts] = useState<Post[]>(response);
  
  const handleAddPost = (novoPost: Post) => {
    setPosts((postsAnteriores) => [novoPost, ...postsAnteriores]);
  }; 

  return (
    <>
    <Headers/>
    <Cards postsList={posts}/>
    <AddCards onPostAdded={handleAddPost}/>
    </>
  )
}

export default App
