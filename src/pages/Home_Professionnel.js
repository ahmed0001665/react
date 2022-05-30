import React from 'react'
import { Link } from 'react-router-dom'

export default function Home_Professionnel() {
  return (
    <React.Fragment>
    <div class="navbar-area">
        <div class="main-responsive-nav">
            <div class="container">
            <div class="mobile-nav">
                <Link to="/home" class="logo ">
                <img src="assets/images/logo-3.png" alt="logo" />
                </Link>
                <ul class="menu-sidebar menu-small-device">
                <li>
                    <Link to="/Login" >
                    <i class="fas fa-sign-out-alt"></i>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div class="main-nav">
            <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
                <Link to="/Login"  class="navbar-brand">
                <img src="assets/images/logo-3.png" alt="logo" />
                </Link>
                <div class="collapse navbar-collapse  mean-menu" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                    <Link to="/home_particulier" class="nav-link dropdown-toggle active">Mon compte</Link>
                    <ul class="dropdown-menu">
                        <li class="nav-item">
                        <Link to="/home_particulier" class="nav-link ">Home Particulier</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/home_professionnel" class="nav-link active">Home Professionnel</Link>
                        </li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <Link to="/rdv_particulier" class="nav-link dropdown-toggle">Mes RDV</Link>
                        <ul class="dropdown-menu">
                        <li class="nav-item">
                            <Link to="/rdv_particulier" class="nav-link ">RDV Particulier</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/rdv_professionnel" class="nav-link">RDV professionnel</Link>
                        </li>
                        </ul>
                    </li>
                </ul>
                <div class="menu-sidebar">
                    <Link to="/Login">
                    <i class="fas fa-sign-out-alt"></i>
                    </Link>
                </div>
                </div>
            </nav>
            </div>
        </div>
        </div>
        <section class="Home-Professionnel pt-65 pb-footer">
        <div class="container min-vh-100">
            <div class="row align-items-center">
            <div class="page-content-top">
                <h4>Mon service</h4>
            </div>
            </div>
            <div class="home-prof Info-container-3 mt-45">
            <div class="worker-info">
                <div class="worker-info-id">
                <div class="worker-info-id-pers">
                    <img src="assets/images/team/tem-1.png" alt="team" />
                    <h4>Alex Smith</h4>
                </div>
                </div>   
                <div class="worker-info-id-left">
                <div class="worker-info-id-pers">
                    <i class="far fa-briefcase"></i>
                    <p>Aide ménagère</p>  
                </div>
                </div>
            </div>
            <div class="details">
                <h4>Tarif</h4>
                <div class="details-inner">
                <i class="far fa-euro-sign"></i>
                <p>34€</p>  
                </div>
            </div>
            <div class="details">
                <h4>Biographie</h4>
                <div class="details-inner">
                <i class="far fa-fingerprint"></i>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum <br />Lorem ipsum </p>  
                </div>
            </div>
            <div class="details">
                <h4>Mes créneaux</h4>
                <div class="details-inner details-inner-date">
                <p>Lundi<span>13H30 -  15h40</span></p>  
                </div>
                <div class="details-inner details-inner-date">
                <p>Jeudi<span>13H30 -  15h40</span></p>  
                </div>

            </div>
            </div>
            <div class="home-prof Info-container-3 mt-45">
            <div class="worker-info">
                <div class="worker-info-id">
                <div class="worker-info-id-pers">
                    <img src="assets/images/team/team-3.png" alt="team" />
                    <h4>Ellsa Smith</h4>
                </div>
                </div>   
                <div class="worker-info-id-left">
                <div class="worker-info-id-pers">
                    <i class="far fa-briefcase"></i>
                    <p>Sales manager</p>  
                </div>
                </div>
            </div>
            <div class="details">
                <h4>Tarif</h4>
                <div class="details-inner">
                <i class="far fa-euro-sign"></i>
                <p>24€</p>  
                </div>
            </div>
            <div class="details">
                <h4>Biographie</h4>
                <div class="details-inner">
                <i class="far fa-fingerprint"></i>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum <br/>Lorem ipsum </p>  
                </div>
            </div>
            <div class="details">
                <h4>Mes créneaux</h4>
                <div class="details-inner details-inner-date">
                <p>Lundi<span>13H30 -  15h40</span></p>  
                </div>
                <div class="details-inner details-inner-date">
                <p>Jeudi<span>13H30 -  15h40</span></p>  
                </div>

            </div>
            </div>

        </div>
        </section>
        <footer class="footer-area bg-footer">
        <div class="container">
            <div class="row">
            <ul class="list-inline">
                <li class="list-inline-item">
                <a href="#">Mentions légales</a>
                </li>
                <li class="list-inline-item">
                <a href="#">Politique de confidentialité</a>
                </li>
                <li class="list-inline-item">
                <a href="#">Qui sommes-nous ?</a>
                </li>
            </ul>
            </div>
        </div>
        </footer>
    </React.Fragment>
  )
}
