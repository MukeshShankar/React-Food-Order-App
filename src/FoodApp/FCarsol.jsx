import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {Container,Row, Col} from 'react-bootstrap';
import './FCarsol.css'

function FCarsol() {
  return (
    <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
        <Col md={11}>
    <Carousel className="Carsl">
      <Carousel.Item className="Carslitem" interval={1000}>
        <img width={900} height={500}
          className="d-block w-100 h-70 img-fluid carlimg"
          src={require("./Assets/Carsolimg/pizza-traditional-italian-cuisin (2).jpg")}
          alt=""
        />
        <Carousel.Caption className="Carslcap">
      <h3> Delicious <br /> <span>Pizza's</span> </h3>
      <p className="Carslp1">EATtttuuu....</p>
      <p className="Carslp2">Enjoyyyyy...</p>  
      <p className="Carslp3">RepEATttttuuuu...</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carslitem" interval={500}>
      <img width={900} height={500}
          className="d-block w-100 h-70 img-fluid"
          src={require("./Assets/Carsolimg/burgers-french-fries-with-black-.avif")}
          alt="First slide"
        />
        <Carousel.Caption className="Carslcap">
      <h3> Cheesy Juicy <br /> <span>Burger's</span> </h3>
      <p className="Carslp1">EATtttuuu....</p>
      <p className="Carslp2">Enjoyyyyy...</p>  
      <p className="Carslp3">RepEATttttuuuu...</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carslitem">
      <img width={900} height={500}
          className="d-block w-100 h-70 img-fluid"
          src={require("./Assets/Carsolimg/intro-1643072146 (1).jpg")}
          alt="First slide"
        />
        <Carousel.Caption className="Carslcap">
      <h3>World of<br /><span>Sub's/Salad's</span></h3>
      <p className="Carslp1">EATtttuuu....</p>
      <p className="Carslp2">Enjoyyyyy...</p>  
      <p className="Carslp3">RepEATttttuuuu...</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carslitem">
      <img width={900} height={500}
          className="d-block w-100 h-70 img-fluid"
          src={require("./Assets/Carsolimg/closeup-crispy-fried-chicken-woo.avif")}
          alt="First slide"
        />
        <Carousel.Caption className="Carslcap">
      <h3> Crunchy Crispy <br /> <span>Fried Chicken</span> </h3>
      <p className="Carslp1">EATtttuuu....</p>
      <p className="Carslp2">Enjoyyyyy...</p>  
      <p className="Carslp3">RepEATttttuuuu...</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carslitem">
      <img width={900} height={500}
          className="d-block w-100 h-70 img-fluid"
          src={require("./Assets/Carsolimg/2783e046-0cb7-11eb-9c83-b28a0dde.avif")}
          alt="First slide"
        />
        <Carousel.Caption className="Carslcap">
      <h3> Unique <br /> <span>Ice Cream's</span> </h3>
      <p className="Carslp1">EATtttuuu....</p>
      <p className="Carslp2">Enjoyyyyy...</p>  
      <p className="Carslp3">RepEATttttuuuu...</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carslitem">
      <img width={900} height={500}
          className="d-block w-100 h-50 img-fluid"
          src={require("./Assets/Carsolimg/360_F_876252006_adQyh4jPuQEk4L5f.jpg")}
          alt="First slide"
        />
        <Carousel.Caption className="Carslcap">
      <h3> Baked delights <br /> <span>Cake's</span> </h3>
      <p className="Carslp1">EATtttuuu....</p>
      <p className="Carslp2">Enjoyyyyy...</p>  
      <p className="Carslp3">RepEATttttuuuu...</p>
      
       </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
    </Container>
  );
}

export default FCarsol;