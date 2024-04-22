import React, {useState} from 'react'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    password:""
  })

  const handleChange=e=>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  const handleSubmit = e =>{
    e.preventDefault()
    console.log(inputs)
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