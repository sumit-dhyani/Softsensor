
import { useEffect, useMemo, useReducer, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

import Products from './Components/Products';
const initialstate={data:[],loading:true,offset:6}
function reducer(state,action){
  switch(action.type){
    case "SETDATA":
      return {...state,data:action.payload}
    case "TOGGLE":
      return {...state,loading:false}
    case "OFFSET":
      return {...state,offset:state.offset+3}
    
    default:
      return state
  }
}
function App() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  const [filteredProds,setfilteredProds]=useState([])
  useEffect(()=>{
    
    fetchapi()
    window.addEventListener("scroll",handlescroll)
  },[])
  useEffect(()=>{
    setfilteredProds(state.data.slice(0,state.offset))
  },[state.data,state.offset])
  
  const fetchapi=()=>{
    fetch('https://apisoftsens.herokuapp.com/').then(data=>data.json()).then(response=>{
      dispatch({type:"SETDATA",payload:response})
      dispatch({type:"TOGGLE"})
      
      
    })
    .catch(err=>console.log(err))
  }
  const handlescroll=(e)=>{
    if(window.innerHeight+e.target.documentElement.scrollTop+1>=e.target.documentElement.scrollHeight){
      console.log("ran again")
      
      dispatch({type:"OFFSET"})
      
      
    }
    
  }
 
  return (<>
    <Navbar />
    <div className='container' >
      
    {
      state.loading?
      <h1>Loading...</h1>
      :
      <Products products={filteredProds} />
    }
    
    </div>
    
    </>
  );
}

export default App;
