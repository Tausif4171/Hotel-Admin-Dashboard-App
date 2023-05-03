import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {
  const [title, setTitle] = useState('')
  console.log(title)
  const navigate = useNavigate()
  function addHotel(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/')
  }
  return (
    <div>
      <h3>Add a new Hotel</h3>
      <form onSubmit={(e) => addHotel(e)}>
        <label>Title</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>Add Hotel</button>
      </form>
    </div>
  )
}
