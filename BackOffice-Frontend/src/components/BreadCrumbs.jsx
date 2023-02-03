// ** React Imports

// ** Third Party Components
import Proptypes from 'prop-types'
import { Grid, CheckSquare, MessageSquare, Mail, Calendar } from 'react-feather'
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import {FaArrowRight,FaPercentage,FaMoneyCheck,FaHandshake,FaClock,FaHome,FaPowerOff,FaUpload, FaBezierCurve, FaGrin, FaDatabase} from 'react-icons/fa';
import {
  Breadcrumb,
  BreadcrumbItem,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

const BreadCrumbs = () => {
  // ** Props

  return (
 
    <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow expanded" >
        <div className="navbar-header expanded">
            <ul className="nav navbar-nav flex-row">
                <li className="nav-item me-auto">
                  <a className="navbar-brand" href="../../../html/ltr/vertical-menu-template/index.html">
                        <h2 className="brand-text"><FaHandshake/>Enchere</h2>
                    </a></li>
                <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pe-0" data-bs-toggle="collapse"></a></li>
            </ul>
        </div>
        <div className="shadow-bottom"></div>
        <div className="main-menu-content">
            <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">

                <li className="nav-item has-sub">
                  <a className="d-flex align-items-center">
                  <span data-i18n="Apps &amp; Pages"><b style={{color:'black'}}><FaArrowRight/>Apps &amp; Pages</b></span>
                  </a>
                  <Link to="/" className="d-flex align-items-center">
                    <span className="menu-title text-truncate"><FaUpload/>Crud Categorie</span>
                  </Link>

                  <Link to="/duree" className="d-flex align-items-center">
                    <span className="menu-title text-truncate"><FaClock/>Duree Enchere</span>
                  </Link>
                  <Link to="/pourcentage" className="d-flex align-items-center">
                    <span className="menu-title text-truncate"><FaPercentage/>Pourcentage Duree</span>
                  </Link>
                  <Link to="/solde" className="d-flex align-items-center">
                    <span className="menu-title text-truncate"><FaMoneyCheck/>Validation recharge</span>
                  </Link>
                  <Link to="/update" className="d-flex align-items-center">
                    <span className="menu-title text-truncate"><FaBezierCurve/>Update Comission</span>
                  </Link>
                </li>

                <li className="nav-item has-sub">
                  <a className="d-flex align-items-center">
                  <span data-i18n="Apps &amp; Pages"><b style={{color:'black'}}><FaArrowRight/>Statistiques</b></span>
                  </a>
                  <Link to="/catcomission" className="d-flex align-items-center">
                    <span className="menu-title text-truncate"><FaDatabase/>Commission-Cat</span>
                  </Link>
                  <Link to="/catenchere" className="d-flex align-items-center">
                    <span className="menu-title text-truncate"><FaDatabase/>Enchere-Cat</span>
                  </Link>

                </li>

                <li className="nav-item has-sub">
                  <a className="d-flex align-items-center">
                  <span data-i18n="Apps &amp; Pages"><b style={{color:'black'}}><FaArrowRight/>Utilisateur</b></span>
                  </a>
                  <Link to="/login" className="d-flex align-items-center">
                    <span className="menu-title text-truncate"><FaPowerOff/>Se déconnecter</span>
                  </Link>

                </li>
            </ul>
        </div>
    </div>
  )
}
export default BreadCrumbs