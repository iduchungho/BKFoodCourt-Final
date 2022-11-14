/**
 * index.js file created on 2022-10-29
 * WELLCOME TO index.js
 * @author Hung, Duc Ho    <https://github.com/iduchungho>
 * @author Phat, Duy Thoi  <https://github.com/duyphatbk>
 * @author Phong, Gia Ngo  <https://github.com/ngogiaphong123>
 * @author Nam, Thanh Nguy <https://github.com/nam7cm>
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
