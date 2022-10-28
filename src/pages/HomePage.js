import React from 'react'
import { NavLink } from 'react-router-dom';
import './Homepage.css'


const HomePage = () => {

  

  return (
    <div className='hello'>
        
        <div className='home'>
          <button><NavLink to='/home'>Go home</NavLink></button>
        </div>
    </div>
  )
}

export default HomePage