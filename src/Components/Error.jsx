import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='container'>
        <div style={{height:100}}/>
        <div className='text-center my-5 card p-5 col-6 m-auto'>
            <h3 className='text-dark'>404 Page Not Found Or You are Unauthorized to Access</h3>
            <Link to="/" className='btn btn-primary my-5'>Home</Link>
            <p className='text-dark'>If you have an Account Please Login</p>
            <Link to="/login" className='btn btn-primary'>Login</Link>
        </div>
    </div>
  )
}
