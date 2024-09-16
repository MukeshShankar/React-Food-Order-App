import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";
import './FCarsol.css'

function FCarsol1() {
  const [show, setShow] = useState(false);
  return (
    <Container fluid className="mt-2 mb-2">
      <Row className="d-flex align-items-center justify-content-center">
        <Col md={7}>
          <Carousel className="Carsl">
            <Carousel.Item className="Carslitem" interval={2000}>
              <img
                className="d-block w-100"
                src="https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p style={{ color: "black" }} className="d-none d-sm-block"></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="Carslitem" interval={2000}>
              <img
                className="d-block w-100"
                src="https://static.vecteezy.com/system/resources/previews/023/010/419/non_2x/the-delicious-burger-in-the-black-background-with-ai-generated-free-photo.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p style={{ color: "black" }} className="d-none d-sm-block"></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="Carslitem" interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Supreme_Meats.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p style={{ color: "black" }} className="d-none d-sm-block"></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="Carslitem" interval={2000}>
              <img
                className="d-block w-100"
                src="https://www.allrecipes.com/thmb/CMzzbzVUrFoGSQjQ5K473WayHyI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/220128-chef-johns-buttermilk-fried-chicken-031-2x1-d429997cbe024e6082f9a24bf1e7c727.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p style={{ color: "black" }} className="d-none d-sm-block"></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="Carslitem" interval={2000}>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/premium-photo/assorted-ice-cream_250469-10337.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p style={{ color: "black" }} className="d-none d-sm-block"></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="Carslitem" interval={2000}>
              <img
                className="d-block w-100"
                src="https://assets-eu-01.kc-usercontent.com/559bb7d3-88a4-01c1-79a3-dd4d5b2d2bb0/1d45a717-bf86-424c-9646-ca7d3b34e614/Chocolate%20Pinata%20Cake_Landscape-13.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <p style={{ color: "black" }} className="d-none d-sm-block"></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      {/* <ToastContainer
          className="p-3 position-fixed bottom-0 end-0"
          position='bottom-end'
          
        >
            <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>item added to cart.</Toast.Body>
          </Toast>
        </ToastContainer> */}
    </Container>
  );
}

export default FCarsol1;
