import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import './FFooter.css'

function FFooter() {
  return (
    <Container fluid className="Footer m-0 p-0">
      <Row
        lg={12}
        className="mt-2 mb-2 d-flex justify-content-center align-items-center flex-wrap"
      >
        <h1 className="mt-2 mb-2 text-center"></h1>
        <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
        <Card className="Footercard text-center">
              <div>
                <div>
                  <h5>Phone no</h5>
                  <p>+91- 98765 54321</p>
                </div>
                <div>
                  <h5>Email Address</h5>
                  <p>TastyTwisters@yahoo.com</p>
                </div>
              </div>
        </Card>
        </div>
        <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
          <Card className="Footercard text-left">
                <h4>Our Company</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Delivery</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
          </Card>
        </div>
        <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
          <Card className="Footercard text-center">
              <Card.Title className=" m-0 p-0">
                <h4>FOLLOW US</h4>
              </Card.Title>
                <div>
                  <a href="https://www.facebook.com">
                    <i className="icon fa fa-facebook-square"></i>
                  </a>
                  <a href="https://twitter.com">
                    <i className="icon fa fa-twitter-square"></i>
                  </a>
                  <a href="https://www.youtube.com">
                    <i className="icon fa fa-youtube-square"></i>
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="icon fa fa-instagram"></i>
                  </a>
                </div>
          </Card>
        </div>
        <div className="Footerline justify-content-center align-items-center text-center">
          <p>Copyright Mukesh | All Rights Reserved.</p>
        </div>
      </Row>
    </Container>
  );
}

export default FFooter;
