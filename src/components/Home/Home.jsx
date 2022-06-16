import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className='home-div'>
      <h1 className='brand'>NEWS</h1>
      <div className='news'>
        <p className='noticia'>Noticia!!!Noticia!!!</p>
        <img src="https://m.media-amazon.com/images/I/41NYpBcHT6L._AC_SY1000_.jpg" alt="una foto de la noticia" className='home-img'/>
      </div>
    </div>
  )
}

export default Home