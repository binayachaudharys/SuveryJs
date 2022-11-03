import React from 'react'
import { useEffect, useState } from "react";
import { Link,useLocation, useParams } from 'react-router-dom'
import App from '../components/DisplayTest';

import './home.css'


const ViewForm = (props) => {

const iddata = useParams();
const id = iddata.id;

    const [blogs, setBlogs] = useState(null)
 

  useEffect(() => {

    fetch('https://json-server-three-mu.vercel.app/formquestion/'+id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

    return (
        <div   >
          
              {blogs && <App blogs={blogs} />}


        </div>
    )
}

export default ViewForm