import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';



export default function ModalHeaderServices(props) {
    console.log(props)
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
            <textarea id="content1" name="content1" onChange={props.onChange}>
                {props.activeItem.content1}
            </textarea>
            {/* </Modal.Body> */}
            <textarea  id="content2" name="content2" onChange={props.onChange}>
                {props.activeItem.content2}
            </textarea>

            <textarea  id="content3" name="content3" onChange={props.onChange}>
                {props.activeItem.content3}
            </textarea>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={props.handleSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
