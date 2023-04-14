import React, { useEffect } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { hotelsCollection } from '../lib/Controller'

export default function Card() {
  useEffect(() => {
    onSnapshot(hotelsCollection, (snapshot) => {
      console.log('snapshot', snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }))

    })
  })
  return (
    <div>
      <h3 style={{ color: "orange" }}>All Hotels</h3>
    </div>
  )
}
