import React from 'react'
import './Home.scss'
import { useEffect } from 'react'

const Home = () => {
  return (
    <div className='home-div'>
      <h1 className='brand'>NEWS</h1>
      <div className='news'>
        <p className='noticia'>Noticia!!!Noticia!!!</p>
        <img src="https://picsum.photos/200/300" alt="una foto de la noticia" className='home-img'/>
      </div>
    </div>
  )
}

export default Home