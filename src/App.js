import './App.css';
import { useEffect ,useContext } from 'react';
import {MyContext} from "./MyContext.js"
import Login from "./components/Login.js"
import Home from "./components/Home.js"


const CDNURL = "https://maxhdvpphynarkivgxkd.supabase.co/storage/v1/object/public/assets/"

function App() {

  const {user, getImages} = useContext(MyContext)
  
// to load images when login 
  useEffect(()=>{
    if(user){
      getImages();
    }
  },[user])

  return (
    <div className="App bg-slate-900">
      <div>
      {/* user will return null if not authenticated and if authenticated then username */}
        {user === null ? (<Login/>) : (<Home/>)}
      </div>
    </div>
  );
}

export default App;
