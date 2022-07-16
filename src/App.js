import React from "react";
import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Teachers from "./components/teacher/Teacher";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Awards from "./components/awards/Awards";
import Admin from "./components/admin/Admin";
import { BrowserRouter } from "react-router-dom";
import { Parallax } from "react-parallax";

function App() {
  return (
    <BrowserRouter>
      <div>
        <GlobalStyles />
        <Navbar />
        <Home />
        <Teachers />
        <Parallax strength={600}>
          <Carousel />
        </Parallax>
        <Admin />
        <Awards />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
