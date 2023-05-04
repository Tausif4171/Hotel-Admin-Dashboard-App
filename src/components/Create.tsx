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
      <form onSubmit={(e) => addHotel(e)} style={{ display: 'inline-grid' }}>
        <label>Title</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Description</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Main Feature</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Image URL link location</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Stars Rating</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Country</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Region</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Number of Reviews</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Total Price ($)</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Price per Night ($)</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <button style={{
          background: 'grey',
          color: 'white',
          borderRadius: '10px',
          border: '2px solid grey'
        }}>Add Hotel</button>
      </form>
    </div>
  )
}
