import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className='header-div'>
      <span className='Home'>
        <Link to='/' className='home'>Home</Link>
      </span>
      <span className='Contact'>
        <Link to='/form' className='contact'>Contact</Link>
      </span>
      <span className='ListNews'>
        <Link to='/listNews' className='listnews'>ListNews</Link>
      </span>
    </div>
  )
}

export default Header