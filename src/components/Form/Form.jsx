import React from 'react'
import {useState} from 'react'

const Form = () => {
    let newsData = JSON.parse(localStorage.getItem('news')) || []
    const getData = () =>{
        newsData.push(data)
        localStorage.setItem('news',JSON.stringify(newsData))
    }

    const date = new Date()

    const initialData ={
        name:'',
        email:'',
        news:'',
        date:date
    }

    const [data,setData] = useState({...initialData})

    const clearData =()=>{
        setData(initialData)
    }

    const handleInputChange =(event)=>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        getData()
        clearData()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Tu nombre</label>
            <input 
            type="text" 
            placeholder='Tu nombre'
            name='name'
            value={data.name}
            onChange={handleInputChange}
            />
            <br />
            <label htmlFor="">Tu correo</label>
            <input 
            type="email" 
            placeholder='Tu correo'
            name='email'
            value={data.email}
            onChange={handleInputChange}
            />
            <br />
            <label htmlFor="">Textea nueva noticia</label><br />
            <textarea 
            cols="30" rows="10"
            placeholder='Algo nuevo?'
            name="news"
            value={data.news}
            onChange={handleInputChange}
            />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Form