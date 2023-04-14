import React, { useEffect } from 'react'
import { onSnapshot } from 'firebase/firestore'

export default function Card() {
  useEffect(() => {
    onSnapshot(hotelsCollection,()=>{
      
    })
  })
  return (
    <div>
      <h3 style={{ color: "orange" }}>All Hotels</h3>
    </div>
  )
}
