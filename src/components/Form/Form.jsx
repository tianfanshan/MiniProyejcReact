import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.scss'

const Form = () => {
    let newsData = JSON.parse(localStorage.getItem('news')) || []
    const getData = () =>{
        newsData.push(data)
        localStorage.setItem('news',JSON.stringify(newsData))
    }
    const navegator = useNavigate()
    const [disable,setDisable] = useState(true)
    const [message,setMessage] = useState('')

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
        if(data.name.length < 3){
            setMessage('Los caraces del nombre minimo tiene que ser 4')
            setDisable(true)
        }else{
            setMessage(null)
            setDisable(false)
        }
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }



    const handleSubmit=(e)=>{
        e.preventDefault()
        getData()
        clearData()
        setMessage('Te llevamos a la pagina de News')
        setTimeout(()=>{
            navegator('/ListNews')
        },3000)
    }

  return (
    <div className='form-div'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Tu nombre</label><br />
            <input 
            type="text" 
            placeholder='Tu nombre'
            name='name'
            value={data.name}
            onChange={handleInputChange}
            className='input'
            /><br />
            <label htmlFor="">Tu correo</label><br />
            <input 
            type="email" 
            placeholder='Tu correo'
            name='email'
            value={data.email}
            onChange={handleInputChange}
            className='input'
            /><br />
            <label htmlFor="">Textea nueva noticia</label><br />
            <textarea 
            cols="30" rows="10"
            placeholder='Algo nuevo?'
            name="news"
            value={data.news}
            onChange={handleInputChange}
            className='input'
            />
            <br />
            <input type="submit" disabled={disable} className='input'/>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default Form