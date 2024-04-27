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
const api = process.env.API_KEY
    


const Write = () => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [quote, setQuote] = useState('')
    const [quoter, setQuoter] = useState('')
    const [model, setModel] = useState("Example Set");

    const handleModelChange = (event)=>{
      setModel(event)
      console.log(model)
    }

    
    
  return (
    <div>
      <h1>Write</h1>
      <FroalaEditor 
          tag='textarea'
          model={model}
          onModelChange={handleModelChange}
      />
    </div>
  )
}

export default Write