import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styleku.css";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

function Index({ token, setToken }) {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (token) {
        try {
          // Authorize from backend
          await axios.get(`${process.env.REACT_APP_AUTH_API}/api/v1/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          if (error.response.status === 401) {
            // remove token
            localStorage.removeItem("token");
            setToken(null);
            navigate.push("/");
          }
        }
      }
    })();
  }, [token, navigate, setToken]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <header id="bra">
      <Outlet />
      <nav className="navbar navbar-expand-lg">
        <div className="container mobile">
          <div className="navbar-brand glow">Movielist</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex mx-auto pencarian" role="search">
              <input
                className="form-control me-2 searching"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* https://react-slick.neostack.com/ */}
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/search?p=${search}`);
                }}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
            <div className="ms-1 react">
              {!token ? (
                <>
                  <button
                    type="submit"
                    className="login"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                  <button
                    type="submit"
                    className="register m-3"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/register");
                    }}
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="register m-3"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Index;
