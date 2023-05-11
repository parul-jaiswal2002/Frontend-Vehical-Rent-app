import React, { useState } from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'

export default function Page3() {
    const [select, setSelect] = useState([])
    const navigate = useNavigate()
    const handleSelectChange = (e) => {
      
        setSelect(e.target.value)
        console.log(select)
    }
  return (
    <div>
         <div className='container'>
        <h2>choose Type of Vehical</h2>
        <label htmlFor='noofwheels'>Type of Vehical</label>
        <select id='noofwheels' onChange={handleSelectChange}>
            <option value='sports'>sports</option>
            <option value='cruiser'>cruiser</option>
        </select>
        
        <button className='button' onClick={() => navigate('/bikeModel')}>Next</button>
    </div>
    </div>
  )
}
