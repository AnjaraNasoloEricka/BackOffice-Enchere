import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap/dist/js/bootstrap.min';
import $ from 'jquery';
import Popper from 'popper.js';
import Header from './components/Header';
import CrudCategorie from './pages/CrudCategorie';
import FormUpdateCategorie from './pages/FormUpdateCategorie';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <div> 
    <Header/>
    <div className="app-content content ">
    <div className="content-overlay"></div>
    <div className="header-navbar-shadow"></div>
    <div className="content-wrapper container-xxl p-0">
    <div className="content-body">
        <App/>
        <Routes>
        <Route path="/test" element={<FormUpdateCategorie/>} ></Route>
        </Routes>

  </div>
  </div>
  </div>
  </div>
  </BrowserRouter>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
