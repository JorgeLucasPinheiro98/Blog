import { useState } from "react"

export default function App () {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('typing')

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('enviando');
  }

  function handleInput(e) {
    setName(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="nome" 
        value={name}
        onChange={handleInput}
        disabled={status === "enviando"}/>
        
        <button disabled={name.length === 0 || status === 'enviando'}>
          Submit
        </button>
      </form>
    </div>
  )
}
