import "./index.css";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import PlatChauds from "./components/Carte/PlatChauds";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services/Services";
import Service from "./components/Service/Service";
// import Multiselect from 'multiselect-react-dropdown';

import Select from 'react-select'
import scrollreveal from "scrollreveal";



ReactDOM.render(

  <Router>
    <Route exact path="/">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Service />
      <Newsletter />
      <Footer />
    </Route>
    <Route exact path="/plats-chauds">
      <ScrollToTop />
      <Navbar />
      <PlatChauds />
      <Footer />
    </Route>


    <Route path="*">
      {/* <Error /> */}
    </Route>
  </Router>,
  document.getElementById("root")
);
