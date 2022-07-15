import React from "react";
import styled from "styled-components";
import MyVerticallyCenteredModal from "./Modal";
import cloche from "../assets/cloche1.png";
import { IoMdRestaurant } from "react-icons/io";
import { GoCalendar } from "react-icons/go";
import {useState, useEffect} from 'react';
import { TitleStyles } from "./ReusableStyles";
import API from "../API";
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import { BsFillPencilFill } from "react-icons/bs";

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
  const [modalShow, setModalShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [serviceId, setServicesId] = useState(null);
  const [services, setServices] = useState([])

  useEffect(() => {
    refreshServices();
  }, []);

  // const onUpdate = (id) => {
  //   console.log(id)
  //   // let item = { description };
  //       // API.patch(`/${id}/`, item).then((res) => refreshServices());
  // };

  const refreshServices = () => {
    API.get("/")
      .then((res) => {
        setServices(res.data);
        // setName(res[0].title)
        // setGenre(res[0].genre)
        // setStarring(res[0].starring)
        // setMovieId(res[0].id)
      })
      .catch(console.error);
  };

  const handleSubmit = (item) => {
    this.toggle();

    item.hashview = String(this.props.id)
    if (item.id) {
        API.put(`/api/services/${item.id}/`, item)
        .then((res) => this.refreshServices());
      return;
    }
      API.post("/api/services/", item)
      .then((res) => this.refreshServices());
  };


  return (
    <Section id="services">
      {services.map((services, index) => {
        // console.log(services)
        return(
          <div className="title">
            <Service>
              <h1 className="yellow">{services.title}</h1> 
              <span>
                <ButtonEdit onClick={() => setModalShow(true)}>
                  <BsFillPencilFill />
                </ButtonEdit>
              </span>
          
            </Service>
            <div className="service-descriptions">
              <Service>
                <p>
                  {services.description}
                  <span>
                    <ButtonEdit onClick={() => setModalShow(true)}>
                      <BsFillPencilFill />
                    </ButtonEdit>
                  </span>
                </p>
              </Service>
            </div>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                activeItem={services}
                // onSave={() => onUpdate()}
              />
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



const ButtonEdit = styled.button`
    border: none;
    background-color: white;
    margin-left: 1em;
`
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
