
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './component/Loading';
import Tours from './component/Tours';
import Navbar from './component/Navbar';
import Signin from './component/Signin';

const url= 'https://course-api.com/react-tours-project';

function App() {  
 

  const [list,setList] = useState([]);
  const[loading,setLoading] = useState(false);
  const [modal,setModal] = useState (false);
  
  const fetchData = async () =>{
    setLoading(true)
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setList(data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[]);

  if(loading){
    return <Loading/>
  }

  return (
    <>
    <Navbar setModal={setModal}/>
    {modal ? <Signin/> : <Tours list={list}/>}
   
    
    </>
  )
}

export default App
