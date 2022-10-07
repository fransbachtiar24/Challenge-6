import React from "react";
import imgRegister from "../../assets/img/movie.png";
import "../../assets/css/styleku.css";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  return (
    <section class="h-100 gradient-form">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black carding carding-bow">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img
                        src={imgRegister}
                        alt=""
                        width="80px"
                        className="glow"
                      />
                      <div className="font-control-login-1">
                        <h4 class="mt-3 mb-5 pb-1">Movielist</h4>
                      </div>
                    </div>
                    <form>
                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example11">
                          Username
                        </label>
                        <input
                          type="email"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Phone number or email address"
                        />
                      </div>

                      <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example22">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form2Example22"
                          class="form-control"
                          placeholder="+4Character"
                        />
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button className="login-control" type="button">
                          Log in
                        </button>
                        <a class="text-muted ms-2" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          class="control-create"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/register");
                          }}
                        >
                          Create new
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-center font-movie-login px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">Movielist</h4>
                    <p class="small mb-0 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
