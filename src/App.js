import { Route, Routes } from "react-router-dom";
import "./App.css";
import imgError from "./assets/img/error400-cover.png";
import Navbar from "./components/navbar/index";
import Home from "./components/Home/index";
import Detail from "./components/Detail/index";
import Register from "./components/register/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route
        path="/*"
        element={<img src={imgError} alt="Gambar Gagal Dimuat" width="100%" />}
      />
    </Routes>
  );
}

export default App;
