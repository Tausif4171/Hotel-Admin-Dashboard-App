import React, { useState, useEffect } from 'react'
import { onSnapshot } from 'firebase/firestore'
import { hotelsCollection } from '../lib/Controller'

export default function Card() {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    onSnapshot(hotelsCollection, (snapshot) => {
      console.log('snapshot', snapshot.docs)
      setHotels(snapshot.docs.map((doc) => {
        console.log('doc', doc)
        return {
          id: doc.id,
          ...doc.data()
        }
      }))

    })
  }, [])
  console.log('hotels', hotels)
  return (
    <div>
      <h3 style={{ color: "orange" }}>All Hotels</h3>
    </div>
  )
}
