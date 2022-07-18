import "./index.css";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Carte from "./components/Carte/Carte";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services/Services";
import Service from "./components/Service/Service";

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
    <Route exact path="/Carte">
      <ScrollToTop />
      <Navbar />
      <Carte />
      {/* <Newsletter /> */}

      <Footer />
    </Route>
    <Route path="*">
      {/* <Error /> */}
    </Route>
  </Router>,
  document.getElementById("root")
);
