import React from 'react'
import { Link } from 'react-router-dom'

export default function RDV_Particulier() {
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
                  <Link to="/home_particulier" class="nav-link dropdown-toggle ">Mon compte</Link>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <Link to="/home_particulier" class="nav-link active">Home Particulier</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/home_professionnel" class="nav-link">Home Professionnel</Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link to="/rdv_particulier" class="nav-link dropdown-toggle active">Mes RDV</Link>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <Link to="/rdv_particulier" class="nav-link active">RDV Particulier</Link>
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
    <section class="RDV-Part pt-65 ">
      <div class="container  min-vh-100" >
        <div class="row align-items-center">
          <div class="page-content-top">
            <h4>Mes prochains RDV </h4>
          </div>
        </div>
        <div class="Info-container Info-container-2 d-flex justify-content-between align-items-center mt-45">
          <div class="Info-container-content">
            <img src="assets/images/team/tem-1.png" alt="team" />
            <div class="content-inner">
              <h4>Alex Smith</h4>
              <p>1.6 km</p>
            </div>
          </div>
          <div class="Info-container-content">
            <div class="center-f">
                <h4>April 10, 2022</h4>
                <p>4:22 PM</p>
            </div>
          </div>
          <div class="Info-container-content">
            <i class="fas fa-circle"></i>
            <div class="content-inner">
              <h5>En ligne</h5>
            </div>
          </div>
        </div>
        <div class="Info-container Info-container-2 d-flex justify-content-between align-items-center mt-25">
            <div class="Info-container-content">
              <img src="assets/images/team/team-3.png" alt="team" />
              <div class="content-inner">
                <h4>Elssa Smith</h4>
                <p>1.6 km</p>
              </div>
            </div>
            <div class="Info-container-content">
              <div class="center-f">
                  <h4>April 10, 2022</h4>
                  <p>4:22 PM</p>
              </div>
            </div>
            <div class="Info-container-content">
              <i class="fas fa-circle red-col"></i>
              <div class="content-inner">
                <h5>En ligne</h5>
              </div>
            </div>
        </div>
        <div class="Info-container Info-container-2 d-flex justify-content-between align-items-center mt-25">
            <div class="Info-container-content">
              <img src="assets/images/team/tem-4.png" alt="team" />
              <div class="content-inner">
                <h4>Alex Smith</h4>
                <p>1.6 km</p>
              </div>
            </div>
            <div class="Info-container-content">
              <div class="center-f">
                  <h4>April 10, 2022</h4>
                  <p>4:22 PM</p>
              </div>
            </div>
            <div class="Info-container-content">
              <i class="fas fa-circle"></i>
              <div class="content-inner">
                <h5>En ligne</h5>
              </div>
            </div>
        </div>
      </div>
    </section>
    <footer class="footer-area mt-45 bg-footer">
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
