import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
  BrowserRouter
} from 'react-router-dom';

import store from './store/Store';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
export default function Index(){
  return(
    <React.StrictMode>
      
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route  path='/' element={<App />} />
      
        <Route exact path="/cart" element={<Cart />} />
    </Routes>
    
    
    </BrowserRouter>
    </Provider>
    <footer>Copyright Reserved by FakeStore ◄</footer>
  </React.StrictMode>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
