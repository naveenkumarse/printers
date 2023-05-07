import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Choose from "./components/Choose";

import "./scss/index.scss";

import Categories from "./components/Categories";
import Recommend from "./components/Recommend";

import Promo from "./components/Promo";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Productpage from "./pages/product_page";
import Sign from "./components/sign";
import Contact from "./pages/contact_page/contact";
import SimpleForm from "./components/bot/bot";
import MultiItemCarousel from "./components/multicorousel/multi";
import MultiItemCarousel1 from "./components/multicorousel/multi1";
import MultiItemCarousel2 from "./components/multicorousel/multi2";
import MultiItemCarousel3 from "./components/multicorousel/multi3";
import MultiItemCarousel4 from "./components/multicorousel/multi4";
import MultiItemCarousel5 from "./components/multicorousel/multi5";
import Description from "./components/description/description";
import Carous from "./components/carous";


function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  // useEffect(() => {
  //   const registerAnimations = () => {
  //     const sr = scrollreveal({
  //       origin: "bottom",
  //       distance: "80px",
  //       duration: 1000,
  //       reset: false,
  //     });
  //     sr.reveal(
  //       `
  //       nav,
  //       .carous,
  //       .services-container,
  //       .categories-container,
  //       .recommend-container,
  //       .choose-us-container,
  //       .products-container,
  //       .promo-container,
  //       footer
  //   `,
  //       {
  //         interval: 500,
  //       }
  //     );
  //   };
  //   registerAnimations();
  // }, []);
  // window.setTimeout(() => {
  //   const carous = document.getElementsByClassName("carous");
  //   if (carous[0]) {
  //     carous[0].style.transform = "none";
  //   }
  // }, 1500);
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={
          <div data-theme={theme} className="app">
            <ScrollTop />
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            {/* <Home /> */}
            <Carous />
            <Choose />
            {/* <Services /> */}
            {/* <Categories /> */}
            <Recommend />
           
            {/* <Products /> */}
            <Promo />
            <Footer />
          </div>} />
        <Route path="/products" element={<div data-theme={theme} className="app">

          <Navbar changeTheme={changeTheme} currentTheme={theme} />
          <Categories />
          <Productpage />
          <SimpleForm />

        </div>

        } />
        <Route path="/login" element={<div data-theme={theme} className="app">
          <Navbar changeTheme={changeTheme} currentTheme={theme} />
          <Sign />
        </div>
        } />
        <Route path="/products/card" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <MultiItemCarousel />

          </div>} />
          
        <Route path="/products/card/id1" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <Description/>

          </div>} />
          <Route path="/products/paper" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <MultiItemCarousel1 />
          </div>} />
          <Route path="/products/sticker" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <MultiItemCarousel2 />
          </div>} />
          <Route path="/products/cover" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <MultiItemCarousel3 />
          </div>} />
          <Route path="/products/bondsheet" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <MultiItemCarousel4 />
          </div>} />
          <Route path="/products/flex" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <MultiItemCarousel5 />
          </div>} />
        
        {/* <Route path="/contact" element={<Contact/>} /> */}
        <Route path="/contact" element={<div data-theme={theme} className="app">
          <Navbar changeTheme={changeTheme} currentTheme={theme} />
          <Contact />
          <SimpleForm />
        </div>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
