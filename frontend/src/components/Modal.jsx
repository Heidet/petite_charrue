import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../API";
import {useState, useEffect} from 'react';
import axios from 'axios';



export default function ModalHeaderServices(props) {
    const [message, setMessage] = useState('');

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
            <textarea id="title" name="message" onChange={props.onChange}>
                {props.activeItem.title}
            </textarea>
            {/* </Modal.Body> */}
            <textarea  id="description" name="message" onChange={props.onChange}>
                {props.activeItem.description}
            </textarea>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={props.handleSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
