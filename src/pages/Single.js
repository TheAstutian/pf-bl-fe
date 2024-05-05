import React, {useState, useEffect, useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { API_URL } from '../App';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../Contexter';


const Single = () => {

const [post, setPost] = useState([])
const {currentUser,logout} = useContext(AuthContext)
const location = useLocation()
const postId = location.pathname.split("/")[2]

useEffect(
 ()=>{
  const loadPost = async()=>{
    const res = await axios.post(`${API_URL}/posts/${postId}`, {id:postId})
    setPost(res.data)
    console.log(res)
    window.scrollTo(0,0)
  }
  loadPost();
 } , [postId]
)

  return (    
    <div className="single-page">
    <Link to='/'><h3>The Astutian</h3></Link>
    {currentUser && <span className="user"><b>Welcome, {currentUser}! || <Link to ='/' onClick={logout}>Logout</Link></b></span>}
    {post? 
    (
    <article>
      <h1>{post.title}</h1>
      <p className='subtitle'> Posted {moment(post.date).fromNow()} </p>
      <section>
        <blockquote>
          <p>{post.quote}</p>
          <footer>{post.quoter}</footer>
        </blockquote>
      </section>
      <section className='article'>
          <img src={`${post.imglnk}`}/>
          {post.model}
      </section>
    </article>):(<p>Loading</p>)}


    </div>
    
  )
}

export default Single