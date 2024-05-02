import React, {useState} from 'react'
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })
  const navigate = useNavigate()

  const handleChange=e=>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
   await   axios.post(`${API_URL}/register`, inputs )
      navigate('/')

    }catch(err){
      console.log(err)
    }
   
  }

  return (
   <div className='auth'>
    <h1>Register</h1>
    <form>
      <input required type="text" placeholder="username" name="username" onChange={handleChange}/>
      <input required type="password" placeholder="password" name="password" onChange={handleChange}/>
      <button onClick={handleSubmit}> Register</button>
    </form>
   </div>
  )
}

export default Register