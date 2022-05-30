import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <React.Fragment>
    <div class="header-logo">
      <Link to="/Home" >
        <img src="assets/images/logo-2.png" alt="header-logo" />
      </Link>
    </div>
    <div id="main-wrapper" class="login-register">
      <div class="d-flex align-items-center">
        <div class=" w-100">
          <div class="container">
            <div class="row g-0 min-vh-100">
              <div class="col-md-6 d-flex flex-column">
                <div class="row g-0 my-auto">
                  <div class="col-11 col-sm-10 col-lg-9 mx-auto text-center">
                    <div class="logo-rect">
                      <img src="assets/images/logo-4.png" alt="logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex align-items-center py-5">
                <div class="container my-auto py-4">
                  <div class="row">
                    <div class="col-11 col-lg-10 mx-auto">
                      <div class="right-content">
                        <p class=" mb-4">Si vous voulez vous inscrire, téléchargez notre application HILMI ! Nous sommes disponible sur PlayStore </p>
                      </div>
                      <button class="btn btn-primary btn-sec btn-sec-2 shadow-none" type="button" onclick="window.location.href = 'https://doctolib.fr//';">
                        <img src="assets/images/icons/playstore.png" alt="playstore-icon" />Se connecter avec Google </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </React.Fragment>
  )
}
