import React, { useState } from 'react'
import './page.css'
import { useNavigate } from 'react-router-dom'

export default function Page2() {
    const [select, setSelect] = useState([])
    const navigate = useNavigate()
    const handleSelectChange = (e) => {
      console.log(Number(select))
        setSelect(e.target.value)
    }
    const handlebtn = () => {
      console.log(Number(select))
      if(Number(select) === 4){
        navigate('/Page4')
      }
      else{
        navigate('/Page3')
      }
    }

  return (
    <div>
         <div className='container'>
        <h2>choose Number of wheels</h2>
        <label htmlFor='noofwheels'>Number of Wheels :</label>
        <select id='noofwheels' onChange={handleSelectChange}>
            <option value='2'>2</option>
            <option value='4'>4</option>
        </select>
        
        <button className='button' onClick={handlebtn}>Next</button>
    </div>
    </div>
  )
}
