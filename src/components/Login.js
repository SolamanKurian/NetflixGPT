import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    let [isSignInForm, setIsSignForm]=useState(true)
    let toggleSignInForm=()=>{
        setIsSignForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div>
        <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_medium.jpg"
        alt='bgimage'></img>
        </div>
        <form className='p-12 bg-black absolute w-3/12 my-36 left-0 right-0 mx-auto bg-opacity-80 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm &&(<input type='text' placeholder='Full Name' className=' p-4 my-2 w-full  bg-gray-700 rounded-lg'></input>)}
            <input type='text' placeholder='Email' className=' p-4 my-2 w-full bg-gray-700 rounded-lg'></input>
            <input type='password' placeholder='Password' className=' p-4 my-2 w-full  bg-gray-700 rounded-lg'></input>
            <button type='submit' className='p-4 my-4 bg-red-600 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login