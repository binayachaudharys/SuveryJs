import React from 'react'
import { useEffect, useState } from "react";
import { Link,useLocation } from 'react-router-dom'
import App from '../components/DisplayTest';
// import BlogList from '../components/formlist'
// import NavMenu from '../components/Nav'
import './home.css'


const ViewForm = (props) => {

const location =useLocation();


    const [blogs, setBlogs] = useState(null)
 

  useEffect(() => {
    const id = location.state;
    console.log(id);
    fetch('http://localhost:8000/formquestion/'+id)
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