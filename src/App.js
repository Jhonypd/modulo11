/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarOffcanvasMobile from "./components/menu/navbar-mobile";
import Home from "./pages/home/home";
import RegisterCar from "./pages/register/register";
import Solicitations from "./pages/solicitation/solicitation";
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarOffcanvasMobile />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterCar />} />
            <Route path="/solicitation" element={<Solicitations />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
