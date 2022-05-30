import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <React.Fragment>
      <div id="main-wrapper" class="login-register">
        <div class="container-fluid px-0">
          <div class="row g-0 ">
            <div class="col-md-7">
              <div class="hero-wrap d-flex align-items-center h-100">
                <div class="hero-bg hero-bg-scroll"></div>
                <div class="hero-content w-100 min-vh-100 d-flex flex-column">
                  <div class="row g-0">
                    <div class="col-10 col-lg-9 mx-auto">
                      <div class="logo">
                        <Link  to="/home" class="d-flex" title="Hilmi">
                          <img src="assets/images/logo.png" alt="Hilmi" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-5 d-flex ml-50">
              <div class="container my-auto py-5">
                <div class="row g-0">
                  <div class="col-10 col-lg-9 col-xl-8 mx-auto">
                    <h6 class="mb-1">Bienvenue !</h6>
                    <h3 class="mb-4">Connectez-vous</h3>
                    <form id="loginForm" method="post">
                      <div class="mb-3">
                        <label for="emailAddress" class="form-label label-title ">Email Address</label>
                        <input type="email" class="form-control" id="emailAddress" required placeholder="Enter Your Email" />
                      </div>
                      <div class="mb-3">
                        <label for="loginPassword" class="form-label label-title">Password</label>
                        <input type="password" class="form-control" id="loginPassword" required placeholder="Enter Password" />
                      </div>
                      <div class="row mt-4">
                        <div class="col">
                          <div class="form-check">
                            <input id="remember-me" name="remember" class="form-check-input" type="checkbox" />
                            <label class="form-check-label" for="remember-me">Se souvenir de moi</label>
                          </div>
                        </div>
                        <div class="col text-end">
                          <a href="#">Forgot Password ?</a>
                        </div>
                      </div>
                      <div class="d-grid my-4">
                        <button class="btn btn-primary" type="submit">Se connecter</button>
                      </div>
                      <div class="d-grid my-4">
                      <button class="btn btn-primary btn-sec" type="submit"><img src="assets/images/icons/google.png" alt="google-log" />Se connecter avec Google</button>
                    </div>
                    </form>
                    <p class="text-center text-muted mb-0">Don't have an account? <  Link to="/register" class="link-primary" >Sign Up</Link></p>
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
