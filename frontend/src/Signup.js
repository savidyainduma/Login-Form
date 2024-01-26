import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import { useState } from 'react'
import axios from 'axios'


function Signup() {

    const [values, SetValues] = useState({
        name:'',
        email:'',
        password:'',
        mobile:'',
        city:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput =(event) => {
        SetValues((prev) => ({...prev, [event.target.name]: event.target.value}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name ==="" && errors.email ==="" && errors.password ==="") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/')})
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25 border border-black'> 
        <h2>Sign-Up</h2>
            <form action='' onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <br/>
                    <input type='text' placeholder='Enter Name' name='name'
                    onChange={handleInput} className='form-control-rounded-0 w-100' />
                    {errors.name && <span className='text-danger'>{errors.name} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <br/>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control-rounded-0 w-100' />
                    {errors.email && <span className='text-danger'>{errors.email} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <br/>
                    <input type='password' placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control-rounded-0 w-100' />
                    {errors.password && <span className='text-danger'>{errors.password} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='mobile'><strong>Phone Number</strong></label>
                    <br/>
                    <input type='text' placeholder='Enter Phone Number' name='mobile'
                    onChange={handleInput} className='form-control-rounded-0 w-100' />
                    {errors.mobile && <span className='text-danger'>{errors.mobile} </span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='city'><strong>City</strong></label>
                    <br/>
                    <input type='text' placeholder='Enter Your City' name='city'
                    onChange={handleInput} className='form-control-rounded-0 w-100' />
                    {errors.city && <span className='text-danger'>{errors.city} </span>}
                </div>
                <p>You agree to our terms and policies.</p>
                <button type='submit' className='btn btn-cuccess w-100 rounded-0 btn-outline-secondary'>Signup</button>
                <p></p>
                <Link to='/' className='btn btn-success btn-default border w-100 rounded-0'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup