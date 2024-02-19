import React, { useContext } from 'react'
import { MyContext } from '../MyContext'

const Home = () => {

  const {signOut , user , uploadImage , images , deleteImage} = useContext(MyContext);

  const CDNURL = "https://maxhdvpphynarkivgxkd.supabase.co/storage/v1/object/public/assets/"

  return (
    <div> 
    <div>
        <p className=''>ImageWall</p>
        <button onClick={()=>signOut()}>Sign Out</button>
        <p>Current user : {user.email}</p>
    </div>
    <div>
        <p>add files</p>

        <form class="mt-4">
            <label for="fileInput" class="block text-sm font-medium text-gray-700">Choose File</label>
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
        <div>
        {images.map((image)=>{
        return (
            <div className='h-[300px] w-[300px]'>
            <img src={CDNURL + user.id + "/" + image.name}></img>
            <div>
                <button onClick={()=>deleteImage(image.name)}>Delete image</button>
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