import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from '../lib/Controller'
import './style.css'
import Information from './Information'

export default function Details() {
  const { id } = useParams()

  // Fetch a single document
  const getHotel = doc(firestore, `hotels/${id}`)

  const [hotel, setHotel] = useState({})
  const [loading, setLoading] = useState(false)
  console.log({ id }, { getHotel }, Object.keys(hotel), '-', Object.keys(hotel).length)
  useEffect(() => {
    const fetchHotelData = async () => {
      setLoading(true)
      const docSnap = await getDoc(getHotel)
      if (docSnap.exists()) {
        const newHotelObj = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setHotel(newHotelObj)
        setLoading(false)
      }
      else {
        // doc.data() will be undefined in this case
        console.log('No such document')
      }
    }
    fetchHotelData()
  }, [])
  console.log({ id }, { getHotel }, { hotel })

  if (loading) {
    console.log('loading....')
    return <div className="loader"></div>
  }

  return (
    <div>
      {Object.keys(hotel) && Object.keys(hotel).length ? 
        ( <>
        <div>
          <Information hotel={hotel} />
        </div>
          </>)
: null}
    </div>
  )
}
