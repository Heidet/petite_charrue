import React from "react";
import cloche from "../../assets/cloche1.png";
import {useState, useEffect} from 'react';
import styled from "styled-components";
import { IoMdRestaurant } from "react-icons/io";
import { GoCalendar } from "react-icons/go";
import { TitleStyles } from "../ReusableStyles";
import API from "../../API";
import ModalHeaderServices from "./Modal";
import { BsFillPencilFill } from "react-icons/bs";


export default function Service() {
  const [modalShow, setModalShow] = useState(false);
  const [services, setServices] = useState([])

  useEffect(() => {
    refreshService();
  }, []);

  const refreshService = () => {
    API.get("/api/service/")
      .then((res) => {
        setServices(res.data);
      })
      .catch(console.error);
  };

  const handleMessageChange = event => {
    console.log(services)
    if (event.target.id === 'content1'){
      services[0].content1 = event.target.value
    }
    if (event.target.id === 'content2'){
      services[0].content2 = event.target.value
    }
    if (event.target.id === 'content3'){
      services[0].content3 = event.target.value
    }
  };

  const handleSubmit = () => {
    if (services[0].id) {
      console.log(services)
      API.put(`api/service/${services[0].id}/`, services[0])
        // .then((res) => this.refreshList());
      return;
    }
    API.post(`api/service/`, services)
      .then((res) => refreshService());
  };


  return (
    <Section>
    {services.map((service, index) => {

        return(
          <div className="services">
            
            <div className="service">
              <TraiteurStyle />
              <p>
          
                {service.content1}
        
                {/* <span>Lorem Ipsum</span>{" "} */}
              </p>
              {/* <button>Read More</button> */}
            </div>
            <div className="service">
              <img src={cloche} alt="" />
              <p>
                {service.content2}
                { /* <span>Lorem Ipsum</span>{" "} */}
              </p>
              {/* <button>Read More</button> */}
            </div>
            <div className="service">
              <EventFood />
              <p>
                {service.content3}
                <span>
                  <ButtonEdit onClick={() => setModalShow(true)}>
                    <BsFillPencilFill />
                  </ButtonEdit>
                </span>
              </p>
              {/* <button>Read More</button> */}
            </div>
            <ModalHeaderServices
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleSubmit = {() => handleSubmit()}
                activeItem={services[0]}
                onChange = {handleMessageChange}
              />
          </div>
        ); 
      })} 
    </Section>
  );  
}



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
      // button {
      //   padding: 0.6rem 3rem;
      //   letter-spacing: 0.2rem;
      //   border-radius: 2rem;
      //   font-size: 1.1rem;
      //   border: none;
      //   color: white;
      //   background-color: #fc4958;
      //   transition: 0.3s ease-in-out;
      //   &:hover {
      //     background-color: #f9c74f;
      //   }
      // }
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
