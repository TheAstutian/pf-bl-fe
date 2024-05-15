import React, {useState, useEffect, useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { API_URL } from '../App';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../Contexter';
import parse from 'html-react-parser';


const Single = () => {

const [post, setPost] = useState([])
const {currentUser,logout} = useContext(AuthContext)
const location = useLocation()
const postId = location.pathname.split("/")[2]

const navigate = useNavigate();

useEffect(
 ()=>{
  const loadPost = async()=>{
    const res = await axios.post(`${API_URL}/posts/${postId}`, {id:postId})
    setPost(res.data)
    window.scrollTo(0,0)
  }
  loadPost();
 } , [postId]
)

const deletePost= async()=>{
  const alert = window.confirm('Delete post?')
  if(alert)
  try{
    await axios.delete(`${API_URL}/delete/${postId}`)
    navigate('/')
  } catch(err){
    console.log(err)
  }
}

  return (    
    <div className="single-page">
    <Link to='/'><h3>The Astutian</h3></Link>
    {currentUser && <span className="user"><b>Welcome, {currentUser}! | <Link to='/write'>New Post</Link>| <Link to ='/' onClick={logout}>Logout</Link></b></span>}
    {post? 
    (
    <article>
      <h1>{post.title}</h1>
      <p className='subtitle'> Posted {moment(post.date).fromNow()} </p> {currentUser&& <><button  className='delButton' ><Link to='/write' state={post}>Edit</Link></button> <button className="delButton" onClick={deletePost}>Delete</button> </>}
      <section>
        <blockquote>
          <p>{post.quote}</p>
          <footer>{post.quoter}</footer>
        </blockquote>
      </section>
      <section className='article'>
          <img src={`${post.imglnk}`}/>
          {parse(`${post.model}`)}
      </section>
    </article>):(<p>Loading</p>)}


    </div>
    
  )
}

export default Single