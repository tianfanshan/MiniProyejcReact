import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <span>Header</span>
    <div>
      <span>
        <Link to='/'>Home</Link>
      </span>
      <span>
        <Link to='/form'>Form</Link>
      </span>
      <span>
        <Link to='/listNews'>ListNews</Link>
      </span>
    </div>
    </nav>

  )
}

export default Header