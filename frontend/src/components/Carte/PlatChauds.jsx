import React from "react";
import {useState, useEffect} from 'react';
import styled from "styled-components";
import API from "../../API";
import ModalArticle from "./Modal";
import SuccessModal from "./SuccessModal";
import { Button } from 'reactstrap';
import { imageZoomEffect, TitleStyles } from "../ReusableStyles";
import { BsFillPencilFill } from "react-icons/bs";


export default function PlatChauds() {
  const [modalShow, setModalShow] = useState(false);
  const [successModal, setSuccessModalShow] = useState(false);
  const [dataDelete, setDataDelete] = useState([]);

  const [articles, setArticles] = useState([])
  const [name , setName] = useState("");
  const [description , setDescription] = useState("");
  const [price , setPrice] = useState("");
  const [article_img , setImage_url] = useState();

  useEffect(() => {
    refreshArticles();
  }, []);


  const updateAfterDelete = () => {
    refreshArticles();
    setSuccessModalShow(true);
  };

  const refreshArticles = () => {
    API.get("/api/ArticlesChauds/")
      .then((res) => {
        setArticles(res.data);
      })
      .catch(console.error);
  };

  const onDelete = (item) => {
    const dataDelete = item
    console.log(dataDelete)
    console.log()    
    API.delete(`/api/ArticlesChauds/${item.id}/`)
    .then((res) => updateAfterDelete(item))
    .catch(console.error);
  };


  const handlesubmit = (item) => {
    let data = {
      name : name ,
      description : description,
      price : price,
      article_img : article_img
    }
    
    API.post("/api/ArticlesChauds/" , data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then((res) => refreshArticles())
    .catch(err=> console.log(err));
    setModalShow(false)
   }
  

  return (
    <Section>
      <div className="title">
        <h1>
            Les plats chauds et les spécialités
        </h1>
      </div>
      <div className="products">
        {articles.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.article_img} alt="" />
              </div>
              <div className="product-infos">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h3>{product.price}€</h3>
              </div>
              <span>
                <ButtonEdit onClick={() => setModalShow(true)}>
                  <BsFillPencilFill />
                </ButtonEdit>
              </span>
              <span>
              <div> 
              <Button color="danger"
               onClick={() => onDelete(product)}> Supprimer
              </Button>{' '}

                {/* <button  
                  onClick={() => onDelete(product)}> Supprimer
                </button> */}
              </div>
              </span>
              {/* <div className="plus"> 
                <button className="see">Voir Plus</button>
              </div> */}
            </div>
            
          );
        })}
          <button
              className="btn btn-primary"
              onClick={() => setModalShow(true)}
              // onClick={() => setModalShow(true)}
            >
              Ajouter une tâche
          </button>
      </div>
      <ModalArticle
          show={modalShow}
          onHide={() => setModalShow(false)}
          handleSubmit={handlesubmit}
          activeItem={articles}
          // onChange = {handlesubmit}
          onChangeName={(e)=>setName(e.target.value)}
          onChangeDescription={(e)=>setDescription(e.target.value)}
          onChangePrice={(e)=>setPrice(e.target.value)}
          onChangeImage={(e)=>setImage_url(e.target.files[0])}
      />

      <SuccessModal
          show={successModal}
          onHide={() => setSuccessModalShow(false)}
          elements={dataDelete}
      />
    </Section>
  );
}

const ButtonEdit = styled.button`
    border: none;
    background-color: white;
    margin-left: 1em;
`


const Section = styled.section`
  ${TitleStyles};
  .products {
    // display: grid;
    // grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      padding-bottom: 3%;
      flex-direction: initial;
      gap: 5.6rem;
      justify-content: center;
      align-items: center;
      .product-infos {
        max-width: 40em;
        min-width: 40em;
      }
      h3 {
        color: #fc4958;
      }
      .plus{
        color:red;
      }
      p {
        // text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.2rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      .see {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background-color: #7a032a;
        text-transform: uppercase;
        &:hover {
          background: #f9c74f;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
