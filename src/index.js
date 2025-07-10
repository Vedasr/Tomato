import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Veda from './App'; /* Veda is the function name in the Appjs file and it is called in main root.render code*/

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//document index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( // to display all the tags
  <React.StrictMode>
    <BrowserRouter>
    <Veda /> 
    </BrowserRouter>
    {/* calling the function written in js file */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
