import React from "react";
import styled from "styled-components";
import cloche from "../assets/cloche1.png";
import { IoMdRestaurant } from "react-icons/io";
import { GoCalendar } from "react-icons/go";
import {useState, useEffect} from 'react';
import { TitleStyles } from "./ReusableStyles";
// export default function Services() {
//   return (
//     <Section id="services">
//       <div className="title">
//         <h1 className="yellow">Ce que nous faisons?</h1>
//         <p>
//           Des plats fait avec des produits de qualité, de la passion, du coeur, des produits du terroir et locaux.
//           Dans notre cuisine à Vauthiermont, nous favorisons la cuisine à l'ancienne. Fournil au feu de bois - Spécialités comtoise.
//         </p>  
//         <span>
//           <button
//             className="btn btn-secondary mr-2"
//             // onClick={() => this.editItem(item)}
//           >
//             Edit
//           </button>
//         </span>
//       </div>
//       <div className="services">
//         <div className="service">
//           <TraiteurStyle />
//           <p>
//             Dans notre magasin de terroir:
//             l'echoppe des grosses culottes
//             Vous trouverez des produits maisons et autres
//             ( Charcuterie, fromage, beurre, crème, yaourts, vin, alcool, miel, café, pâtes)
//             {/* <span>Lorem Ipsum</span>{" "} */}
//           </p>
//           <span>
//             <button
//               className="btn btn-secondary mr-2"
//               // onClick={() => this.editItem(item)}
//             >
//               Edit
//             </button>
//           </span>
//           {/* <button>Read More</button> */}
//         </div>
//         <div className="service">
//         <img src={cloche} alt="" />

//           <p>
//             L'Auberge La Petite Charrue propose des menus à emporter le midi.
//             Les repas sont livrés en barquettes thermoscellées en liaison chaude et froide entre 11h30 et 13h00.
//             { /* <span>Lorem Ipsum</span>{" "} */}
//           </p>
//           {/* <button>Read More</button> */}
//         </div>
//         <div className="service">
//           <EventFood />
//           <p>
//             Pour vos journées événementielles ou d'entreprise (Mariage, baptême, anniversaire, etc... ), n'hésitez pas à nous contacter.
//             {/* <span>Lorem Ipsum</span>{" "} */}
        
//           </p>
//           {/* <button>Read More</button> */}
//         </div>
//       </div>
//     </Section>
//   );
// }

export default function Services() {

  const [title, setTitle] = useState([])
  useEffect (() => {
    setTitle([
      {
        title:'Ce que nous faisons?',
        description: "Des plats fait avec des produits de qualité, de la passion, du coeur, des produits du terroir et locaux. Dans notre cuisine à Vauthiermont, nous favorisons la cuisine à l'ancienne. Fournil au feu de bois - Spécialités comtoise.",
      },
    ])
  }, [])
  return (
    <Section id="services">
      {title.map((title, index) => {
        return(
          <div className="title">
            <Service>
              <h1 className="yellow">{title.title}</h1> 
              <span>
                <button
                  className="btn btn-secondary mr-2"
                  // onClick={() => this.editItem(item)}
                >
                  Edit
                </button>
              </span>
            </Service>
            <div className="service-descriptions">
              <Service>
                <p>
                  {title.description}
                  <span>
                  <button
                    className="btn btn-secondary mr-2"
                    // onClick={() => this.editItem(item)}
                  >
                    Edit
                  </button>
                </span> 
                </p>
                
              </Service>
            </div>
          </div>
        )
      })}
      <div className="services">
        <div className="service">
          <TraiteurStyle />
          <p>
            Dans notre magasin de terroir:
            l'echoppe des grosses culottes
            Vous trouverez des produits maisons et autres
            ( Charcuterie, fromage, beurre, crème, yaourts, vin, alcool, miel, café, pâtes)
            {/* <span>Lorem Ipsum</span>{" "} */}
          </p>
          <span>
            <button
              className="btn btn-secondary mr-2"
              // onClick={() => this.editItem(item)}
            >
              Edit
            </button>
          </span>
          {/* <button>Read More</button> */}
        </div>
        <div className="service">
        <img src={cloche} alt="" />

          <p>
            L'Auberge La Petite Charrue propose des menus à emporter le midi.
            Les repas sont livrés en barquettes thermoscellées en liaison chaude et froide entre 11h30 et 13h00.
            { /* <span>Lorem Ipsum</span>{" "} */}
          </p>
          {/* <button>Read More</button> */}
        </div>
        <div className="service">
          <EventFood />
          <p>
            Pour vos journées événementielles ou d'entreprise (Mariage, baptême, anniversaire, etc... ), n'hésitez pas à nous contacter.
            {/* <span>Lorem Ipsum</span>{" "} */}
        
          </p>
          {/* <button>Read More</button> */}
        </div>
      </div>
    </Section>
  );  
}
// export default Services;

const EventFood = styled(GoCalendar)`
  color: #7a032a;
  font-size: 3em;
`

const TraiteurStyle = styled(IoMdRestaurant)`
  color: #7a032a;
  font-size: 3em;
`

// const EventFood = styled(BsCalendar2Event)`
//   color: #7a032a;
//   font-size: 3em;
// `
// const EventFood = styled(BsCalendar2Event)`
//   color: #7a032a;
//   font-size: 3em;
// `

const Service = styled.div`
  display: inline-flex;
  align-self: center;
`

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    // .yellow {
    //   button {
    //     // background-color: #f9c74f;
    //     &:hover {
    //       background-color: #fc4958;
    //     }
    //   }
    // }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
