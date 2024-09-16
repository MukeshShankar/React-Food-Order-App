import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Mnubar.css'

export const Mnubar = ({setLogin, cart}) => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary m-0 p-0">
      <Container fluid>
        <Navbar.Brand className="ms-2 fw-bolder"><Link className="linkstyle ms-5 ps-3 h2" to="/">TastY TwisteRs</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="ms-4 me-4 fw-bolder">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/FAbout">About</Nav.Link>
            <Nav.Link href="/Fcontact">Contact us</Nav.Link>
            <br />
          </Nav>
          <Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
          <Nav className="d-flex me-5 pe-4">
          <Nav.Link href=""><Link className="" to=""><img src={require("./Assets/search.png")} alt="" style={{ width: '20px', height:'20px'}}/></Link></Nav.Link>
          <Nav.Link href=""><Link className="" to=""><img src={require("./Assets/account.png")} alt="" style={{ width: '20px', height:'20px'}}/></Link></Nav.Link>
          <Nav.Link href=""><Link className="linkstyle" to="/Shopcart"><span>{cart.length}</span><img src={require("./Assets/market.png")} alt="" style={{ width: '20px', height:'20px'}}/></Link></Nav.Link>
          <Button variant="primary" className="btn-warning ms-4" onClick={()=>setLogin(true)}>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  )
}
