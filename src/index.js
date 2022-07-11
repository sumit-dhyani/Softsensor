import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

import store from './store/Store';

export default function Index(){
  return(
    <React.StrictMode>
      
    <Provider store={store}>
      <App />
    </Provider>
    <footer>Copyright Reserved by FakeStore ◄</footer>
  </React.StrictMode>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index />
);


