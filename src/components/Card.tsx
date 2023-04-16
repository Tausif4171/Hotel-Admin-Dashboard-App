import React, { useState, useEffect } from 'react'
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore'
import { hotelsCollection } from '../lib/Controller'
import { NewHotelType } from '../types/hotels'

export default function Card() {
  const [hotels, setHotels] = useState<NewHotelType[]>([])
  useEffect(() => {
    onSnapshot(hotelsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
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
      {
        hotels.map((item) => {
          const { id, title, country, description, fearure, location, perNight, region, review, stars, totalPrice } = item
          return (

            <div>
              <h3>{title}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
