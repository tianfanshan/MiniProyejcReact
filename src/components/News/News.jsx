import React ,{useContext,useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './News.scss'

const News = () => {
    const {news,getNews}=useContext(GlobalContext)
    useEffect(()=>{
        getNews();
    },[])
    if(!news){
        return <span>cargando...</span>
    }
    const newsItem = news.map((newsItem)=>{
        // console.log(newsItem)
        return (
            <div key={newsItem.id} className='news-div'>
            <h1 className='news-title'>{newsItem.title}</h1>
            {/* {console.log('image',newsItem.media.length !== 0 ? newsItem.media:'')} */}
            <img src={newsItem.media.length !== 0 ? newsItem.media[0]['media-metadata'][2].url:''} alt="imagen de la news" className='news-image'/>
            </div>
        )
    }) 
    return (
        <div>{newsItem}</div>
      )
}

export default News