import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom'
import styled from "styled-components";
import { GiConsoleController, GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { browserHistory } from 'react-router'
import { Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';



export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);

  const html = document.querySelector("html");
  console.log(html)
  html.addEventListener("click", () => setNavbarState(false));

  const handleChange = (e) => {
    if(e.target.value === 'entrees'){
      // <Redirect to="/somewhere/" />
      return <Redirect to="/plats-chauds" />;
    }else if(e.target.value === 'plats-chauds'){
      console.log('plats-chauds');
      <Redirect to="/plats-chauds" />
      return  <a href="/plats-chauds">Les journées à Thèmes</a>;

    }else if(e.target.value === 'desserts'){
      console.log('')

    }else{
      console.log('')

    }
    // this.setState({selectedValue: e.target.value})
  }

  return (
    <>
      <Nav>
        <div className="brand1">
          <p className="social-name">La Petite Charrue</p>
          <p className="social-name-two">Auberge du Terroir</p>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="/" className="active">
              Accueil
            </a>
          </li>
          <li>
            <a href="#services">Nos services</a>
          </li>
          <li>
            <a href="#portfolio">Les spécialités</a>
          </li>
          <li>
            <a href="#testimonials">Les journées à Thèmes</a>
          </li>
          <li>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle
                caret
                className="nav-link"
                tag="a"
              >
                Carte
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  href="/entrees"
                  tag="a"
                >
                  Les Entrées
                </DropdownItem>
                <DropdownItem
                  href="/plats-chauds"
                  tag="a"
                >
                  Les Plats Chauds
                </DropdownItem> 
                <DropdownItem
                  href="/desserts"
                  tag="a"
                >
                  Les Desserts
                </DropdownItem>  
                <DropdownItem
                  href="/vins"
                  tag="a"
                >
                  Les Vins
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
          <li className="litest">
            <a href="#newsletter">Contact</a>
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#home"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Accueil
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              Nos services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setNavbarState(false)}>
              Les spécialités
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
              Les journées à Thèmes
            </a>
          </li>
          <li>
            <select className="select-menu" name="select-menu" >
              <option selected disabled hidden>Carte</option>
              <option value="10-15">Les entrées</option>
              <option value="1-10">Plats Chauds</option>
              <option value="15-20">Les desserts</option>
              <option value="20+">Les Vins</option>
            </select>
          </li>
          <li>
            <a href="#newsletter" onClick={() => setNavbarState(false)}>
              Contact
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}



const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 4vw;
  .brand1 {
    .social-name{
      color: #7a032a;
      font-family: Brush Script MT, Brush Script Std, cursive;
      font-size: 2em;
      margin-bottom: 0;
    }
    .social-name-two{
      color: black;
      font-family: Brush Script MT, Brush Script Std, cursive;
      font-size: 1.5em;
    }
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      .nav-link {
        padding: 0;
      }
      .dropdown-menu{
        width: 15em;
      }
      a {
        color: #7a032a;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #f9c74f;
        }
      }
   
      .active {
        color: #f9c74f;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #f9c74f;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }  
      &:first-of-type {
        a {
          color: #fc4958;
          font-weight: 900;
        }
      }
    }
  }
`;
