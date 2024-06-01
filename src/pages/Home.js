import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../Contexter.js'
import { API_URL } from '../App.js';

const Home = () => {

  const {currentUser,logout} = useContext(AuthContext)
  const [posts, setPosts] =useState(null)
  const [error, setError]= useState("")
  
        useEffect(()=>{
           let isloading = true;
     
              const loadPosts = async()=>{
                 try{
                    const res = await axios.get(`${API_URL}/posts`)   
                    if(res&&isloading){
                      const sortedPosts = res.data.sort(function compare(a,b){
                        var dateA = new Date (a.date);
                        var dateB = new Date (b.date);
                        return dateB - dateA
                      })
                      setPosts(sortedPosts)
                    }
                 }catch(err){
                  setError(err)
                 }
              }
              loadPosts()
              
              
          return ()=> (isloading=false);
           
        } , []) 

  return (
    <div className='home-container'>
      <div className='title'>
        <h1 className='main-title'>The Astutian.</h1>
        <p className='sub-title'>Thoughts, opinions, rants.</p>
        {currentUser && <span className="user"><b>Welcome, {currentUser}! | <Link style={{"color":"gray"}} to='/write'>New Post</Link> | <Link to ='/' style={{"color":"gray"}} onClick={logout}>Logout</Link></b></span>}
      
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