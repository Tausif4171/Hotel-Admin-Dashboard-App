import React from 'react'

export default function Create() {
  function addHotel(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <div>
      <h3>Add a new Hotel</h3>
      <form onSubmit={(e) => addHotel(e)}>
        <label>Title</label>
        <input type='text' />
        <button>Add Hotel</button>
      </form>
    </div>
  )
}
