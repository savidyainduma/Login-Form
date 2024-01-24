import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'> 
            <form action=''>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <br/>
                    <input type='email' placeholder='Enter Email' className='form-control-rounded-0 w-100' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <br/>
                    <input type='password' placeholder='Enter Password' className='form-control-rounded-0 w-100' />
                </div>
                <button className='btn btn-success btn-default border w-100 rounded-0'>Login</button>
                <p>You agree to our terms and policies.</p>
                <Link to='/signup' className='btn btn-default border w-100 rounded-0 text-decoration-none'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login