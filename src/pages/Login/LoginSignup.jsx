import React, { useState } from 'react'
import MyImageSvg from "/undraw_shopping_bags.svg";
import SvgWebsite from "/undraw_website_75fe.svg";

const LoginSignup = () => {
  const [isLoginScreen, setisLoginScreen] = useState(true)
  return (
    <div className=' flex w-full'>
      <div className='md:w-1/2 md:max-w-md w-full  h-[88vh] text-center relative'>
        <img src={MyImageSvg} alt="img" className='w-52 block mx-auto my-2' />
        <h2 className='font-bold text-2xl '>{isLoginScreen?"Login":"Signup"}</h2>
        {/* login form */}
        {/* <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label> */}
        <form action="" className='px-4'>
          <label className="input input-bordered flex items-center gap-2 my-2 md:w-2/3 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          {/* <label className="input input-bordered flex items-center gap-2 my-2 md:w-2/3 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" className="grow" placeholder="Username" />
          </label> */}
          <label className="input input-bordered flex items-center gap-2 my-2 md:w-2/3 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder='Password' />
          </label>
          {!isLoginScreen && (<label className="input input-bordered flex items-center gap-2 my-2 md:w-2/3 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" className="grow" placeholder='Confirm Password' />
          </label>) }
          <input type="submit" className='btn btn-ghost bg-[var(--theme-bgcolor)] text-white w-full md:w-2/3 mx-auto' 
          value={isLoginScreen?"Login":"Signup"} />
        </form>

        <div className='absolute bottom-2 left-0 w-full '>
          <div className='flex w-full justify-center cursor-pointer' onClick={()=>{setisLoginScreen(!isLoginScreen)}}>
          {isLoginScreen ? <>Do Not have account? <span className=' font-medium underline ms-1'>Signup</span></>
          : <>Already have account? <span className=' font-medium underline ms-1'>Login</span></>} 
          </div>
        </div>
      </div>

      <div className='hidden md:w-full md:flex md:items-center md:justify-center border-s-2 border-black'>
        <img src={SvgWebsite} className='w-80' alt="" />
      </div>
    </div>
  )
}

export default LoginSignup