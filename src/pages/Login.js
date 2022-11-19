import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineGithub,AiFillFacebook} from 'react-icons/ai'

const Login = () => {
  const google = () => {
    window.open("http://localhost:3500/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:3500/auth/github", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:3500/auth/facebook", "_self");
  };
  return (
    <>
      <div className=' mt-28'>
      <div className='grid place-content-center '>
        <h1 className='text-5xl font-extrabold text-center'>Login Account With</h1>
         <div className='login mt-4 cursor-pointer hover:shadow-lg  hover:scale-105 ease-in-out duration-300' onClick={google}>
            <div className=' flex items-center gap-3 justify-center px-4 py-2'><FcGoogle size={40} /><span className='text-3xl font-bold'>Google</span></div>
         </div>
         <div className='login mt-4  cursor-pointer hover:shadow-lg hover:scale-105 ease-in-out duration-300' onClick={github}>
            <div className=' flex items-center gap-3 justify-center px-4 py-2'><AiOutlineGithub size={40} /><span className='text-3xl font-bold'>Github</span></div>
         </div>
         <div className='login mt-4  cursor-pointer hover:shadow-lg hover:scale-105 ease-in-out duration-300' onClick={facebook}>
            <div className=' flex items-center gap-3 justify-center px-4 py-2'><AiFillFacebook size={40} /><span className='text-3xl font-bold'>Facebook</span></div>
         </div>
      </div>
      </div>
    </>
  )
}

export default Login