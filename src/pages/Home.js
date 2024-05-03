import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Single from './Single.js'
import { AuthContext } from '../Contexter.js'

const Home = () => {

  const {currentUser,logout} = useContext(AuthContext)
  const [posts, setPosts] =useState(null)

  return (
    <div className='home-container'>
      <div className='title'>
        <h1 className='main-title'>The Astutian.</h1>
        <p className='sub-title'>Thoughts, opinions, rants.</p>
        <span className='user'>Welcome, <b>{currentUser}!</b></span>
      </div>
      <div className='home-body'>
        <hr/>
        <span>tags, tags, tags</span>
        <Link to='/'><h2>Why earth is called earth and not assbeads.</h2></Link>
        <hr/>
      </div>
    </div>
  )
}

export default Home