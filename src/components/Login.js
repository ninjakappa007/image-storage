import React, { useContext } from 'react'
import { MyContext } from '../MyContext'


const Login = () => {

  const {magicLinkLogin , userEmail , setEmail} = useContext(MyContext);

  return (
    <div className='max-w-[1200px] h-[100vh] text-slate-200  mx-auto p-20'>
        <div>
            <h1>Welcome to ImageWall</h1>
            <div>
            <form onSubmit={magicLinkLogin}>
              <div className='flex flex-col w-1/2 mx-auto mt-10'>
                <label>Enter an email to sign in with Supabase magic link</label>
                <input
                  type='email'
                  placeholder='enter email here'
                  onChange={(event) => setEmail(event.target.value)}
                  value={userEmail}
                  className='text-slate-900'
                />
              </div>
              <button type='submit'>Get magic link</button>
            </form>
            </div>
        </div>

    </div>
  )
}

export default Login