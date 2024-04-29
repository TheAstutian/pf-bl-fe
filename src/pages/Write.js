import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactDOM from 'react-dom';

            
// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import  FroalaEditorComponent from 'react-froala-wysiwyg';
import  FroalaEditor from 'react-froala-wysiwyg';


import { API_URL } from '../App';
const api = process.env.REACT_APP_API_KEY
    


const Write = () => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [quote, setQuote] = useState('')
    const [quoter, setQuoter] = useState('')
    const [model, setModel] = useState("");
    const [image, setImage] = useState('')


    useEffect(()=>{
      
    }, [model])

    const handleModelChange = (event)=>{
      setModel(event)
      console.log(model)
    }
    const upload = async()=>{
      try{
        if(!image){return null}
        else if (image.name){
          const formData = new FormData();
          formData.set('key', api)
          formData.append("image", image)
          const res = await axios.post('https://api.imgbb.com/1/upload', formData)
          console.log("upload response", res.data.data.image.url)
          return res.data.data.image.url
        }
      }catch(err){
        console.log(err)
      }
    }

   let config={
    documentReady: true,
    heightMin:300,
   } 

   const onSubmit=async e=>{
    e.preventDefault();
    const image2 = await upload()
    console.log(title,subTitle,quote,quoter,model, image2)

   }
    
  return (
    <div className='write-container'>
      <h1>New Post</h1>
      <div className='section1'>
          <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
          <input type="text" placeholder='Sub title' value={subTitle} onChange={e=>setSubTitle(e.target.value)}/>
          <textarea type="text" style={{height:"60px", padding: "10px",font:"serif",}} placeholder='Quote' value={quote} onChange={e=>setQuote(e.target.value)}/>
          <input type="text" placeholder='Quoter' value={quoter} onChange={e=>setQuoter(e.target.value)}/>
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