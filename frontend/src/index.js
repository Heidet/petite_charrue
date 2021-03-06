import "./index.css";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import PlatChauds from "./views/Carte/PlatChauds";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./views/Services/Services";
import Service from "./views/Service/Service";
// import Multiselect from 'multiselect-react-dropdown';

import Select from 'react-select'
import scrollreveal from "scrollreveal";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";


ReactDOM.render(
  <Router>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <AuthProvider>
        {/* <Navbar /> */}
        <Switch>
          <PrivateRoute component={ProtectedPage} path="/protected" exact />
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
          {/* <Route component={Home} path="/" /> */}
          <Route component={Home} exact path="/">
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
        </Switch>
      </AuthProvider>
    </div>
</Router>,
  document.getElementById("root")
);
