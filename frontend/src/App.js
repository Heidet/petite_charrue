import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      {/* <Route exact path="/Carte">
          <Products />
      </Route> */}
      <Newsletter />
      <Footer />
    </Router>,
    </>
  );
}
