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
        <label htmlFor='noofwheels'>Model of Car</label>
        <select id='noofwheels' onChange={handleSelectChange}>
            <option value='Audi'>Audi</option>
            <option value='Mercedez'>Mercedez</option>
            <option value='BMW'>BMW</option>
            <option value='Scorpio'>Scorpio</option>
            <option value='Mahindra'>Mahindra</option>
        </select>
        
        <button className='button' onClick={() => navigate('/date')}>Next</button>
    </div>
    </div>
  )
}
