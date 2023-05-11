import React, { useState } from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'


export default function Page1() {
    const navigate = useNavigate()
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [error, setError] = useState('')
    const handleNext = () => {
      if(!firstname || !lastname){
         setError("Both Feilds are mandatory")
      }
      else{
        navigate('/Page2')
      }
    }
  return (
    <div className='container'>
        <h2>First, What's your name ?</h2>
        <label htmlFor='firstname'>First Name</label>
        <input type="text" id='firstname'
           onChange={(e) => setFirstName(e.target.value)}
           value={firstname}
        ></input>
        <label htmlFor='lastname'>Last Name</label>
        <input type="text" id='lastname'
        onChange={(e) => setLastName(e.target.value)}
        value={lastname}
        ></input>
        {error && <div className='error'>{error}</div>}
        <button className='button' onClick={handleNext}>Next</button>
    </div>
  )
}
