import React, { useState } from 'react'

export default function Create() {
  const [title, setTitle] = useState('')
  console.log(title)
  function addHotel(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <div>
      <h3>Add a new Hotel</h3>
      <form onSubmit={(e) => addHotel(e)}>
        <label>Title</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button>Add Hotel</button>
      </form>
    </div>
  )
}
