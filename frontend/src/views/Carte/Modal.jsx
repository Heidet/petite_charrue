import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import { Form, FormGroup, Label, Col, Input, FormText, } from 'reactstrap';


export default function ModalArticle(props) {

    

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
            
            <Form>
                <FormGroup>
                    <Label for="titre">
                        Titre
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    defaultValue={props.activeItem.name}
                    // value={props.activeItem.name}
                    placeholder="Choisir Titre"
                    onChange={props.onChangeName}

                    // type="titre"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">
                        Description
                    </Label>
                    <Input
                    id="description"
                    name="description"
                    defaultValue={props.activeItem.description}
                    placeholder="Choisir Description"
                    onChange={props.onChangeDescription}

                    // type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">
                        Prix
                    </Label>
                    <Input
                    id="price"
                    name="price"
                    defaultValue={props.activeItem.price}
                    placeholder="Choisir Prix"
                    onChange={props.onChangePrice}

                    // type="email"
                    />
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="file"
                    sm={2}
                    >
                        Image
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="image_url"
                        type="file" 
                        name="file"
                        // filename={props.activeItem.article_img}
                        accept="image/jpeg,image/png,image/gif"
                        onChange={props.onChangeImage}

                    />
                    <FormText>
                        {/* This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line. */}
                    </FormText>
                    </Col>
                </FormGroup>
            </Form>
            <Modal.Footer>
                <Button onClick={props.onHide}>Annuler</Button>
                <Button onClick={props.handleSubmit}>Sauvegarder</Button>
            </Modal.Footer>
        </Modal>
    );
}
