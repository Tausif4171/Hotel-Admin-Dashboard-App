import React, { useState, useEffect } from 'react'
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore'
import { hotelsCollection } from '../lib/Controller'
import { NewHotelType } from '../types/hotels'
import Information from './Information'
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
  // console.log('hotels', hotels)
  return (
    <div style={{ margin: '10px 60px 10px 60px' }}>
      <h3 style={{ color: "orange" }}>All Hotels</h3>
      {/* {
        hotels.map((item) => {
          const { id, title, country, description, fearure, location, perNight, region, review, stars, totalPrice } = item
          return (

            <div>
              <h3>{title}{" - "}{totalPrice}</h3>
              <h5>{location}{" - "}{region}</h5>
              <h5>{review}</h5>
              <p>{description}</p>
            </div>
          )
        })
      } */}
      {hotels && hotels.length ? hotels?.map((hotel) => {
        return (
          <Information key={hotel.id} hotel={hotel} />
        )
      }) : <>
        <h3>There are no hotels. Please add one.</h3>
      </>}
    </div>
  )
}
