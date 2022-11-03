import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import BlogList from '../components/formlist'
import NavMenu from '../components/Nav'
import './home.css'


const Demopage = () => {


    // const createSuvery = async () => {


    //     const formdata = await fetch('http://localhost:8000/formquestion/');
    //     const formlist = await formdata.json();
    //     console.log(formlist);
    //     // window.location.replace('/')
    // }

    const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('https://json-server-three-mu.vercel.app/formquestion/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])
    return (
        <div   >
             <NavMenu/>
            <div className='col-12  mt-5'  >
                <h2 className='text-center'>Survey JS Form  list</h2>

               
                {blogs && <BlogList blogs={blogs} />}
            </div>
            {/* <div className='col-12 col-md-6  '>
                <h1 className='text-end' style={{ marginTop: "290px" }}>Create your free survey form.</h1>
                <div className="text-end mt-5">
                    <Link className='btn btn-primary d-inline btn-lg' to="/create-form">Get Started</Link>
                </div>
            </div> */}


        </div>
    )
}

export default Demopage