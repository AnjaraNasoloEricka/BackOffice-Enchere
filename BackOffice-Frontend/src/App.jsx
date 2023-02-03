import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AllCategoryCard from './components/AllCategoryCard';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import './assets/vendors/css/vendors.min.css';

import './assets/css/bootstrap-extended.css';
import './assets/css/bootstrap.css';

import './assets/css/colors.css';
import './assets/css/components.css';
import './assets/css/themes/dark-layout.css';
import './assets/css/themes/semi-dark-layout.css';
import './assets/css/core/menu/menu-types/vertical-menu.css';
import CrudCategorie from './pages/CrudCategorie';
import { useEffect } from 'react';
import FormUpdateCategorie from './pages/FormUpdateCategorie';
import FormDuree from './pages/FormDuree';
import ListSolde from './pages/ListSolde';
import LoginAdmin from './pages/LoginAdmin';
import FormPourcentage from './pages/FormPourcentage';
import CategoriePenchere from './pages/CategoriePenchere';
import CategoriePComission from './pages/CategoriePComission';
import Updatecomission from './pages/Updatecomission';


function App() {
  useEffect(()=>{
    document.body.classList.add('vertical-layout','navbar-floating','vertical-menu-modern');
  },[]);

  return (
    
        <Routes>
          <Route exact path="/" element={<CrudCategorie/>} ></Route>
          <Route path="/modif" element={<FormUpdateCategorie/>} ></Route>
          <Route path="/duree" element={<FormDuree/>} ></Route>
          <Route path="/solde" element={<ListSolde/>} ></Route>
          <Route path="/login" element={<LoginAdmin/>} ></Route>
          <Route path="/pourcentage" element={<FormPourcentage/>} ></Route>
          <Route path="/catcomission" element={<CategoriePComission/>} ></Route>
          <Route path="/catenchere" element={<CategoriePenchere/>} ></Route>
          <Route path="/update" element={<Updatecomission/>} ></Route>
          
        </Routes>


  );
}

export default App;
