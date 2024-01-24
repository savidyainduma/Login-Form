import React from 'react'
import { Link } from 'react-router-dom'



function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'> 
            <form action=''>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <br/>
                    <input type='text' placeholder='Enter Name' className='form-control-rounded-0 w-100' />
                </div>

                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <br/>
                    <input type='email' placeholder='Enter Email' className='form-control-rounded-0 w-100' />
                </div>
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
                <Link to='/' className='btn btn-success btn-default border w-100 rounded-0'>Login</Link>
                <p>You agree to our terms and policies.</p>
                
            </form>
        </div>
    </div>
  )
}

export default Signup