import React from "react";
import "../../assets/css/styleku.css";

function Index() {
  return (
    <div id="loginTmd">
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong">
                <div className="card-title">
                  <div className="d-flex">
                    <h3 class="p-2 ms-4 log-in">Log In To Your Account</h3>
                    <div className="justify-content-end ms-auto p-2">
                      <i className="fa fa-close"></i>
                    </div>
                  </div>
                  <hr />
                </div>
                <div class="card-body p-5 text-center">
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="typeEmailX-2"
                      name="first_nama"
                      class="form-control form-control-lg"
                      placeholder="First Nama"
                      required
                    />
                    <span class="fa fa-user first-nama"></span>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="typeEmailX-2"
                      name="last_nama"
                      class="form-control form-control-lg"
                      placeholder="Last Nama"
                      required
                    />
                    <span class="fa fa-user"></span>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      class="form-control form-control-lg"
                      placeholder="Email Address"
                      required
                    />
                    <span class="fa fa-envelope mail"></span>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      required
                    />
                    <span className="fa fa-eye pw"></span>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                      placeholder="Password Confirmation"
                      required
                    />
                    <span className="fa fa-eye pw-2"></span>
                  </div>
                  <div className="text-lg-start">
                    <button className="btn-login" href="#">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
