import React, { useState } from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'

export default function CarModel() {
    const [select, setSelect] = useState([])
    const navigate = useNavigate()
    const handleSelectChange = (e) => {
        setSelect(e.target.value)
        console.log(select)
    }
    

  return (
    <div>
         <div className='container'>
        <h2>Select Model</h2>
        <label htmlFor='noofwheels'>Model of Bike</label>
        <select id='noofwheels' onChange={handleSelectChange}>
            <option value='Hero'>Hero</option>
            <option value='Pulser'>Pulser</option>
            <option value='Hyndai'>Hyndai</option>
        </select>
        
        <button className='button' onClick={() => navigate('/date')}>Next</button>
    </div>
    </div>
  )
}
