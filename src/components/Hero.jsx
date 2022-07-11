import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">

        <div className="info">
          <h2>Auberge La Petite Charrue</h2>
          <em>
            <h1>
              Comtois rends-toi, Nenni ma foi. 
            </h1>
            <h3>
              Telle est notre devise, à nous franc-comtois, depuis la nuit des temps ...
            </h3>
          </em>
          <button>Voir la carte</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
