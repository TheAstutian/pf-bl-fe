import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import moment from 'moment';
import { useNavigate,Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexter';

            
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import  FroalaEditor from 'react-froala-wysiwyg';


import { API_URL } from '../App';
const api = process.env.REACT_APP_API_KEY
    


const Write = () => {
  const state = useLocation().state; 
    const [title, setTitle] = useState(state?.title || '')
    const [subTitle, setSubTitle] = useState(state?.subTitle || '')
    const [quote, setQuote] = useState(state?.quote || '')
    const [tags, setTags] = useState(state?.tags || '')
    const [quoter, setQuoter] = useState(state?.quoter || '')
    const [model, setModel] = useState(state?.model||"");
    const [image, setImage] = useState(state?.imglnk || '')
    const [error, setError]= useState(null)

    const {currentUser,logout} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
  
    }, [model])
 
     

    const handleModelChange = (event)=>{
      setModel(event)
    }
    
    const upload = async()=>{
      try{
        if(!image){return null}
        else if (image.name){
          const formData = new FormData();
          formData.set('key', api)
          formData.append("image", image)
          const res = await axios.post('https://api.imgbb.com/1/upload', formData)
          return res.data.data.image.url
        }
      }catch(err){
        setError(err)
      }
    }

   let config={
    documentReady: true,
    heightMin:300,
    width: '100%'
   } 

   

   const onSubmit=async e=>{
    e.preventDefault();
    if(!currentUser) return;    

    if (state){
        
        try {
          let imglnk 
          if (image.name){
             imglnk = await upload()
          } else {
            imglnk = image;}

            await axios.patch(`${API_URL}/update/${state._id}`, {
              title,
              subTitle,
              quote,
              quoter,
              model,
              imglnk,
              tags,
              id: state._id
            })
            alert("Post updated")
           
            navigate(`/posts/${state._id.toString()}`)
        } catch(err){
          setError(err)
        }
      } else { 

        try{    

          const imglnk = await upload()
          await axios.post(`${API_URL}/write`, {
            title,
            subTitle,
            quote,
            quoter,
            model,
            imglnk,
            tags,
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
          }
          )}
          catch(err){
            setError(err)
          }
      
          alert("New post created")
          navigate('/') 
      }
   
   }
    
  return (
    
    <div className='write-container'>
      
       {currentUser && <span className="user"><b>Welcome, {currentUser}! || <Link to ='/' onClick={logout}>Logout</Link></b></span>}
      <h1>New Post</h1>
      {}
      <div className='section1'>
          <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
          <input type="text" placeholder='Sub title' value={subTitle} onChange={e=>setSubTitle(e.target.value)}/>
          <textarea type="text" style={{height:"60px", padding: "10px",font:"serif",}} placeholder='Quote' value={quote} onChange={e=>setQuote(e.target.value)}/>
          <input type="text" placeholder='Quoter' value={quoter} onChange={e=>setQuoter(e.target.value)}/>
          <input type="text" placeholder='Tags' value={tags} onChange={e=>setTags(e.target.value)}/>
         <div className='image-section'>
         <label className='file' htmlFor='file'>{image? "Change image" : "Add Image" }</label>
         <input  type='file' name='' id="image" onChange={e=>setImage(e.target.files[0])}/>
         </div>

      </div>

     <div className='section2'>
       <div className='froala-editor'>
            <FroalaEditor className="froala2"
                    tag='textarea'
                    model={model}
                    onModelChange={handleModelChange}
                    config={config}
                />
       </div>

          <div onClick={onSubmit} className='button-container'><button className='button'>Submit</button></div>
     </div>
    </div>
  )
}

export default Write