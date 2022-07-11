
import { useEffect, useMemo, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { SETDATA, TOGGLE } from './store/actions';

// import Products from './Components/Products';
// const initialstate={data:[],loading:true,offset:6}
// function reducer(state,action){
//   switch(action.type){
//     case "SETDATA":
//       return {...state,data:action.payload}
//     case "TOGGLE":
//       return {...state,loading:false}
//     case "OFFSET":
//       return {...state,offset:state.offset+3}
    
//     default:
//       return state
//   }
// }
function App() {
  
  const dispatch=useDispatch()
  useEffect(()=>{
    
    fetchapi()
    
  },[])
  const fetchapi=()=>{
    fetch('https://apisoftsens.herokuapp.com/').then(data=>data.json()).then(response=>{
      dispatch(SETDATA(response))
      dispatch(TOGGLE())
      
      
    })
    .catch(err=>console.log(err))
    
  }
  return(
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
