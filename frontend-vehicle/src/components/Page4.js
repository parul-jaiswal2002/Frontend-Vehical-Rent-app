import React, { useState } from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'

export default function Page4() {
    const navigate = useNavigate()
    const [select, setSelect] = useState([])
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
            <option value='hatchback'>hatchback</option>
            <option value='suv'>suv</option>
            <option value='sedan'>sedan</option>
        </select>
        
        <button className='button' onClick={() => navigate('/carModel')}>Next</button>
    </div>
    </div>
  )
}
