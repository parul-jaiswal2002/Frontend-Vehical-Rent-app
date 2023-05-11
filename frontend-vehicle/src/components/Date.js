import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useVehicalContext } from '../hook/useVehicalContext'



export default function Date() {
    const navigate = useNavigate()
    // const {dispatch} = useVehicalContext()
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async () => {
        if(!start || !end){
           setError('Please Select Date')
        }
        else{
            // const booking = {Firstname, Lastname,NumberOfWheels, TypeOfVehical,Model, start, end } 
            // const response = await fetch('/vehical/submit',{   
            //     method : "POST",
            //     body : JSON.stringify(booking),
            //     headers : {
            //      'Content-Type' : 'application/json',
            //     }
            //  })                                  
            //  const json = await response.json();
            //  if(response.ok){
               
            //     dispatch({type: 'BOOK_VEHICAL', payload: json})
            // }
            navigate('/submit')
            setError('')
        }
    }
  return (
    <div>
        <div>
         <div className='container'>
        <h2>Select Date</h2>
        <label htmlFor='noofwheels'>StartDate :</label>
        <input type='date' id='noofwheels' onChange={(e) => setStart(e.target.value)} value={start}></input>
        <label htmlFor='endDate'>EndDate :</label>
        <input type='date' id='endDate' onChange={(e) => setEnd(e.target.value)} value={end}></input>
        
        {error && <div className='error'>{error}</div>}
        <button className='button' onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    </div>
  )
}
