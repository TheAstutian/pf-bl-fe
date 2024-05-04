import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import Single from './Single.js'
import axios from 'axios';
import { AuthContext } from '../Contexter.js'
import { API_URL } from '../App.js';

const Home = () => {

  const {currentUser,logout} = useContext(AuthContext)
  const [posts, setPosts] =useState(null)

  
        useEffect(()=>{
           let isloading = true;

           const loadPosts = async()=>{
            const res = await axios.get(`${API_URL}/posts`)       
              if(isloading){
                setPosts(res.data)
              }
            console.log(posts)
            } 
           
          loadPosts()
          return ()=> (isloading=false);
          
        } , [])

  

  return (
    <div className='home-container'>
      <div className='title'>
        <h1 className='main-title'>The Astutian.</h1>
        <p className='sub-title'>Thoughts, opinions, rants.</p>
        <span className='user'>Welcome, <b>{currentUser}!</b></span>
      </div>
      <div className='home-body'>
      <hr/>

      {posts ? (
          posts.map((post) => (
           <div className='posts' key={post._id.toString()}>
           <span>{post.tags}</span>
           <Link to={`/posts/${post._id.toString()}`}><h2>{post.title}</h2></Link>
           <hr/>
           </div> 
            
          ))
        ) : (
          <p>Loading...</p>
        )}

      </div>
    </div> 
  )
}

export default Home