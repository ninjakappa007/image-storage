import { createContext, useState } from 'react';
import { useUser , useSupabaseClient  } from '@supabase/auth-helpers-react';
import {v4 as uuidv4} from "uuid";

/**
 * Here, you are creating a new context named MyContext using the createContext function from React.
 *  This context will be used to share values across components.
 */
export const MyContext = createContext();

/**
 * 
 * This is the provider component for the context. It takes a children prop,
 * which represents the nested components that will have access to the values provided by the context.
 */
export default function MyContextProvider({children}){

    // Below we can define our functions and state which are need to be accessed
    const [userEmail, setEmail] = useState("");
    const [images,setImages] = useState([]);
    
    const user = useUser();
    const supabase = useSupabaseClient();


    // functions
    async function getImages(){
        const {data , error} = await supabase
        .storage
        .from('assets')
        .list(user?.id + "/" , {
          limit:100 , 
          offset:0,
          sortBy:{column:"name" , order:"asc"}
        }) //ashu/
    
        if(data !== null){
          setImages(data);
        }
        else{
          console.log("error")
        }
      }

      async function magicLinkLogin(e) {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithOtp({
          email: userEmail,
        });
    
        if (error) {
          alert("Error: Use a valid email");
          console.error(error);
        } else {
          alert("Check your email for a magic link to login");
        }
      }

      async function uploadImage(e){
        let file = e.target.files[0];
        // userid: ashu
        // ashu
        // ashu/muname.png
        const {data , error} = await supabase
        .storage
        .from('assets')
        .upload(user.id + "/" + uuidv4() , file) //uuid , 
    
        if(data){
          getImages();
        }
        else{
          console.log(error);
        }
      }

      async function deleteImage(imageName){
        const {error} = await supabase
        .storage
        .from('assets')
        .remove([user.id + "/" + imageName])
    
        if(error){
          alert(error);
        }
        else{
          getImages();
        }
      }

      async function signOut(){
        const {error} = await supabase.auth.signOut();
      }

    /**
     * You are creating an object value that contains the state variables and functions you want to share via the context.
     */
      const value = {
        userEmail,
        setEmail,
        images,
        setImages,
        user,
        supabase,
        getImages,
        magicLinkLogin,
        uploadImage,
        deleteImage,
        signOut
      };

      /**
       * Accessing functions and state variables :   const { userEmail, getImages } = useContext(MyContext);
       */
    
      /**
       * The MyContext.Provider component wraps around the children components. 
       * It provides the values stored in the value object to all the nested components that consume this context.
       */
    return <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>

}


