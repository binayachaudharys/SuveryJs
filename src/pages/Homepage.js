import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Homepage = () => {
  return (
    <div className='row '  >
  
        
        <div className='col-6'>
          <div className='position-relative wrapper  ' class="logo">
         
            <div className="position-absolute showcase1">
              <h1 className='text-center'>Create your free survey form.</h1>
              <div className="text-center mt-5">
                <Link className='btn btn-primary d-inline btn-lg' to="/create-form">Get Started</Link>
              </div>
            </div>
          </div>
    
      </div>

    </div>
  )
}

export default Homepage