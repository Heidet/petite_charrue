import React from "react";
import styled from "styled-components";
import ModalHeaderServices from "./Modal";
import { IoMdRestaurant } from "react-icons/io";
import { GoCalendar } from "react-icons/go";
import {useState, useEffect, useContext} from 'react';
import { TitleStyles } from "../../components/ReusableStyles";
import API from "../../API";
import { BsFillPencilFill } from "react-icons/bs";
import AuthContext from "../../context/AuthContext";

export default function Services() {
  const [modalShow, setModalShow] = useState(false);
  const [services, setServices] = useState([])
  const { user, logoutUser } = useContext(AuthContext);


  useEffect(() => {
    refreshServices();
  }, []);

  const refreshServices = () => {
    API.get("api/services/")
      .then((res) => {
        setServices(res.data);
      })
      .catch(console.error);
  };

  const handleMessageChange = event => {
    if (event.target.id === 'title'){
      // console.log(services)
      services[0].title = event.target.value
    }
    if (event.target.id === 'description'){
      services[0].description = event.target.value
    }
  };

  const handlesubmit = () => {
    if (services[0].id) {
      API.put(`api/services/${services[0].id}/`, services[0])
        .then((res) => refreshServices());
      return;
    }
    API.post(`api/services/`, services)
      .then((res) => refreshServices());
  };

  return (
    <Section id="services">
      {services.map((services, index) => {
        return(
          <div className="title">
            <ServiceStyle>
              <h1 className="yellow">{services.title}</h1> 
              <span>
                {user ? (
                    <>
                  <ButtonEdit onClick={() => setModalShow(true)}>
                    <BsFillPencilFill />
                  </ButtonEdit>
                    </>
                  ) : (
                    <>
                      {/* <Link to="/login">Login</Link> */}
                      {/* <Link to="/register">Register</Link>  */}
                    </>
                  )}
              </span>
          
            </ServiceStyle>
            <div className="service-descriptions">
              <ServiceStyle>
                <p>
                  {services.description}
                  <span>
                  {user ? (
                    <>
                    <ButtonEdit onClick={() => setModalShow(true)}>
                      <BsFillPencilFill />
                    </ButtonEdit>
                    </>
                  ) : (
                    <>
                      {/* <Link to="/login">Login</Link> */}
                      {/* <Link to="/register">Register</Link>  */}
                    </>
                  )}
                  </span>
                </p>
              </ServiceStyle>
            </div>
              <ModalHeaderServices
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleSubmit = {() => handlesubmit()}
                activeItem={services}
                onChange = {handleMessageChange}
              />
          </div>
        )
      })}
  
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

const ServiceStyle = styled.div`
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
