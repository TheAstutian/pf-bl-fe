import React, {useState, useContext} from 'react'

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password:""
  })

  const handleChange=e=>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit= async e =>{
    e.preventDefault()
    console.log(inputs)
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