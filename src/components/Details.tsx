import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../lib/Controller'

export default function Details() {
  const { id } = useParams()

  // Fetch a single document
  const getHotel = doc(firestore, `hotels/${id}`)
  console.log({ id }, { getHotel })

  const [hotel, setHotel] = useState({})
  useEffect(() => {
    const fetchHotelData = async () => {
      const docSnap = await getDoc(getHotel)
      if (docSnap.exists()) {
        const newHotelObj = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setHotel(newHotelObj)
      }
    }
    fetchHotelData()
  },[])
  console.log({ id }, { getHotel },{hotel})
  
  return (
    <div>Details</div>
  )
}
