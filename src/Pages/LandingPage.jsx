import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <Header />
      <div style={{ height: '90vh' }} id='homec' className='container-fluid pt-5  '>

        <div className='mt-5'>
          <h1 className='text-center fw-bold text-light pt-5'>Welcome to Students registration</h1>
        </div>
        <div className='text-center mt-5'>
       <Link to={'/register'}>   <button className='btn btn-primary shadow p-2 rounded'>Get Started</button></Link>
        </div>
      </div>

    </>
  )
}

export default LandingPage