import React from 'react'
import { NewHotelType } from '../types/hotels'

interface IProps {
    hotel: NewHotelType
}

export default function Information({ hotel }: IProps) {
    console.log('hotels', hotel)
    return (
        <div>Information</div>
    )
}
