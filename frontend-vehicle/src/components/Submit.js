import React from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'

export default function Submit() {
    const navigate = useNavigate()
  return (
    <div className='container'>
        <h1>Booked successfully</h1>
        <div>
            <button onClick={() => navigate('/')}>New Booking</button>
        </div>
    </div>
  )
}
