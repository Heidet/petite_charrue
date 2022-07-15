import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../API";
import {useState, useEffect} from 'react';
import axios from 'axios';



export default function MyVerticallyCenteredModal(props) {

    const [message, setMessage] = useState('');
    const handleMessageChange = event => {
        if (event.target.id == 'title'){
            props.activeItem.title = event.target.value
        }
        if (event.target.id == 'description'){
            props.activeItem.description = event.target.value
        }
        console.log(props.activeItem);

    };

    const handleSubmit = (item) => {
        if (props.activeItem.id) {
          API.put(`${props.activeItem.id}/`, props.activeItem)
            // .then((res) => this.refreshList());
          return;
        }
        API.post("", props.activeItem)
        //   .then((res) => this.refreshList());
    };
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
            </Modal.Title>
            </Modal.Header>
            {/* <Modal.Body> */}
            <h4>Modal</h4>
            <textarea id="title" name="message" onChange={handleMessageChange}>
                {props.activeItem.title}
            </textarea>
            {/* </Modal.Body> */}
            <textarea  id="description" name="message" onChange={handleMessageChange}>
                {props.activeItem.description}
            </textarea>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={handleSubmit()}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
