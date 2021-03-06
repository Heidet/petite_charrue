import React from "react";
import {useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import API from "../../API";
import ModalArticle from "./Modal";
import SuccessModal from "./SuccessModal";
import { Button } from 'reactstrap';
import { imageZoomEffect, TitleStyles } from "../../components/ReusableStyles";
import { BsFillPencilFill } from "react-icons/bs";
import AuthContext from "../../context/AuthContext";



export default function PlatChauds() {
  const [modalShow, setModalShow] = useState(false);
  const [addModalShow, setAddModalShow] = useState(false);
  const [successModal, setSuccessModalShow] = useState(false);
  const [articles, setArticles] = useState([])
  const [name , setName] = useState("");
  const [description , setDescription] = useState("");
  const [id , setId] = useState("");
  const [price , setPrice] = useState("");
  const [article_img , setImage_url] = useState();
  const [active , setActiveItem] = useState([]);
  const { user, logoutUser, authTokens } = useContext(AuthContext);

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
    console.log(item)
    API.delete(`/api/ArticlesChauds/${item.id}/`)
    .then((res) => updateAfterDelete(item))
    .catch(console.error);
  };

  const onUpdate = (item) => {
    setActiveItem(item);
    setModalShow(true)  
  };


  
  const handlesubmit = (item) => {
    if(item.id){
      let data = {
        id: item.id,
        name : item.name,
        description : item.description,
        price : item.price,
        article_img : article_img,

      }

      API.put(`/api/ArticlesChauds/${item.id}/`, data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
        .then((res) => refreshArticles())
        .catch(err=> console.log(err));
        setModalShow(false)  
    }else {
      console.log(authTokens.access)
      let data = {
        name : name,
        description : description,
        price : price,
        article_img : article_img
      }

      API.post("/api/ArticlesChauds/" , data, {
        headers: {
          'content-type': 'multipart/form-data',
          // 'Authorization': `Bearer ${JSON.parse(authTokens)}`
        }
      })
        .then((res) => refreshArticles())
        .catch(err=> console.log(err));
      setAddModalShow(false)
    }

  }

  return (
    
    <Section>
      <div className="title"> 
        <h1>
          Les plats chauds et les sp??cialit??s
        </h1>   
      </div>
      {articles.map((product) => {
      return (
        <div className="products">
            <div className="product">
              <div className="image">
                <img src={product.article_img} alt="" />
              </div>
              <div className="product-infos">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h3>{product.price}???</h3>
              </div>
              <span>
                {user ? (
                  <>
                  <ButtonEdit onClick={() => onUpdate(product)}>
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
              <span>
              <div>
                {user ? (
                  <>
                  <Button color="danger"
                    onClick={() => onDelete(product)}> Supprimer
                  </Button>{' '}
                  </>
                ) : (
                  <>
                    {/* <Link to="/login">Login</Link> */}
                    {/* <Link to="/register">Register</Link>  */}
                  </>
                )} 
              </div>
              </span>
            </div>
        
        <ModalArticle
          show={modalShow}
          onHide={() => setModalShow(false)}
          handleSubmit={() => handlesubmit(product)}
          activeItem={active}
          onChangeName={(e)=>setName(e.target.value)}
          onChangeDescription={(e)=>setDescription(e.target.value)}
          onChangePrice={(e)=>setPrice(e.target.value)}
          onChangeImage={(e)=>setImage_url(e.target.files[0])}
        />
        <ModalArticle
          show={addModalShow}
          onHide={() => setAddModalShow(false)}
          handleSubmit={handlesubmit}
          activeItem={articles}
          onChangeName={(e)=>setName(e.target.value)}
          onChangeDescription={(e)=>setDescription(e.target.value)}
          onChangePrice={(e)=>setPrice(e.target.value)}
          onChangeImage={(e)=>setImage_url(e.target.files[0])}
        />
        </div>
        );
      })}
      {user ? (
        <>
        <button
          className="btn btn-primary"
          onClick={() => setAddModalShow(true)}
        >
          Ajouter un article
        </button>
        </>
      ) : (
        <>
          {/* <Link to="/login">Login</Link> */}
          {/* <Link to="/register">Register</Link>  */}
        </>
      )} 
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
`