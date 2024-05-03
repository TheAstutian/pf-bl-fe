import React, {useState, useContext} from 'react';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password:""
  })

  const navigate=useNavigate()

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    
  }

  const handleSubmit= async e =>{
    e.preventDefault()
    try{
       await axios.post(`${API_URL}/login`, inputs)
       navigate('/')
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" name="username" onChange={handleChange}/>
        <input type="password" placeholder="password" name="password"onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
      </form>

    </div>
  )
}

export default Login