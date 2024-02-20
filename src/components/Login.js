import React, { useContext } from 'react'
import { MyContext } from '../MyContext'


const Login = () => {

  const {magicLinkLogin , userEmail , setEmail} = useContext(MyContext);

  return (
    <div className='max-w-[1200px]  text-slate-200 mx-auto'>
        <div>
            <h1 className='text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-7'>Welcome to ImageWall</h1>
            <div>
            <form onSubmit={magicLinkLogin} className='flex flex-col gap-8'>
              <div className='flex flex-col w-1/2 mx-auto mt-10'>
                <label className='text-xl font-extralight'>Enter an email to sign in with Supabase magic link</label>
                <input
                  type='email'
                  placeholder='Email'
                  onChange={(event) => setEmail(event.target.value)}
                  value={userEmail}
                  className='text-slate-900 mt-10 p-4 rounded-md text-xl'
                />
              </div>
              <button type='submit' className='bg-cyan-900 p-4 rounded-md text-xl font-semibold mx-auto hover:scale-110 
              duration-300 hover:bg-cyan-700'>Get magic link</button>
            </form>
            </div>
        </div>

    </div>
  )
}

export default Login