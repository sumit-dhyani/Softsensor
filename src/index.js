import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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
export default function Index(){
  return(
    <React.StrictMode>
      
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<App />} />
      
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


