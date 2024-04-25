import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import { API_URL } from '../App';

const Write = () => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubTitle] = useState('')
    const [quote, setQuote] = useState('')
    const [quoter, setQuoter] = useState('')

  return (
    <div>Write</div>
  )
}

export default Write