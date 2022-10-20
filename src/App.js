import { Route, Routes } from "react-router-dom";
import "./App.css";
import imgError from "./assets/img/error400-cover.png";
import Navbar from "./pages/navbar/index";
import Home from "./pages/Home/index";
import Detail from "./pages/Detail/index";
import Register from "./pages/register/index";
import Login from "./pages/login/index";
import All from "./pages/Movie/All";
import Search from "./pages/search/Search";
import Protected from "./security/protected";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";

function App() {
  const simpanToken = localStorage.getItem("token");
  const [token, setToken] = useState(simpanToken);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Routes>
        <Route path="/" element={<Navbar setToken={setToken} token={token} />}>
          <Route index element={<Home />} />
          <Route
            path="/detail/:id"
            element={
              <Protected setToken={setToken} token={token}>
                <Detail />
              </Protected>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/movielist" element={<All />} />
        </Route>
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route
          path="/*"
          element={
            <img src={imgError} alt="Gambar Gagal Dimuat" width="100%" />
          }
        />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
