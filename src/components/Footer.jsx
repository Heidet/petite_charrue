import React from "react";
import styled from "styled-components";
import logo from "../assets/FoodYummy.png";
import { FaTripadvisor } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import {
  Link
} from 'react-router-dom';

import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          {/* <img src={logo} alt="" /> */}
          <h1>
            <p className="social-name">La Petite Charrue</p>
          </h1>
          {/* <p>
           
          </p> */}
          <ul>
            <li>
              <a target="_blank" href="https://www.tripadvisor.fr/Restaurant_Review-g19345967-d3752781-Reviews-La_Petite_Charrue-Vauthiermont_Territoire_de_Belfort_Bourgogne_Franche_Comte.html">
                <FaTripadvisor /> 
              </a>
            </li>
            <li>
              <a target="_blank" href="https://fr-fr.facebook.com/lapetitecharrue90/">
                <FaFacebookF /> 
              </a>
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>Info</h3>
          </div>
          <div>
            <p>La petite charrue 13 rue principale 90150 VAUTHIERMONT</p>
            <p>Siret: 45295260900017</p>
            <p>RCS: Belfort B 452 952 609</p>
          </div>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact</h3>
          </div>
          <p>03 84 23 89 14</p>
          <p>restaurant@gmail.com</p>
          {/* <p>@foodyummy</p> */}
          <p>13 rue principale, 90150 Vauthiermont</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2022 <span>HEIDET Antoine</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
