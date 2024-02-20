import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

const Home = () => {

  const {signOut , user , uploadImage , images , deleteImage} = useContext(MyContext);

  const CDNURL = "https://maxhdvpphynarkivgxkd.supabase.co/storage/v1/object/public/assets/"

  return (
    <div className='max-w-[1200px]  text-slate-200 mx-auto'> 
    <div className='text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-4 flex justify-between'>
        <p className=' text-4xl font-bold text-slate-500'>ImageWall</p>
        <p className='my-auto font-extralight'>Current user : {user.email}</p>
        <button onClick={()=>signOut()} className='bg-white p-2 rounded-md text-cyan-700 hover:scale-105 duration-300'>Sign Out</button>
        
    </div>
    <div className='flex justify-center'>

        <form class="mt-4">
            <label for="fileInput" class="block font-medium text-gray-700">Choose File to upload</label>
            <input type="file" id="fileInput" name="fileInput" class="mt-1 p-2 border rounded-md"
            accept='image/png , image/jpeg' onChange={(e) => uploadImage(e)}/>

            <p class="mt-2 text-sm text-gray-500">Selected File: <span id="selectedFileName">None</span></p>
        </form>
    </div>
    <div>
        <h3>Your images</h3>
        {/* 
            to get an image : CDNURL + user.id + "/" + image.name
            images : [image1 , image2 , image3]
        */}
        <div className='p-8 flex flex-wrap'>
        {images.map((image)=>{
        return (
            <div className=' w-[200px] h-[200px]'>
            <img src={CDNURL + user.id + "/" + image.name}></img>
            <div>
                <button onClick={()=>deleteImage(image.name)} className='bg-slate-800 p-1 rounded-md text-cyan-700 mt-2'>Delete image</button>
            </div>
            </div>
        )
        })}
        </div>
    </div>


    </div>
  )
}

export default Home