import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import {Container,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './FHome.css'
import FCarsol from '../FCarsol';
import FCarsol1 from '../FCarsol1';

export const THome = () => {
  return (
    <Container fluid className="Fhome mt-1 ">
      <FCarsol/>
      <h1 className="ms-5 me-5 mt-4 mb-4 text-center">Explore Our Menu</h1>
        <Row>
          <div className="Fmenu">
          <div>
          <Link to={"/Pizza"} className="linkstyle">
          <img src="https://www.bakersspring.com/uploads/quick/cate/Pepperoni-new-3001.png" alt="" className='img-fluid' width={100} height={100}/>
           <h5>Pizza</h5></Link>
          </div>
          <div>
          <Link to={"/Burger"} className="linkstyle">
          <img src="https://www.bakersspring.com/uploads/quick/cate/burger-image1.png" alt="" className='img-fluid' width={100} height={100} />
           <h5>Burger</h5></Link>
          </div>
          <div>
          <Link to={"/Subs"} className="linkstyle">
          <img src="https://www.bakersspring.com/uploads/quick/cate/Subsandsalads.jpg" alt="" className='img-fluid' width={100} height={100} />
           <h5>Subs & Salads</h5></Link>
          </div>
          <div>
          <Link to={"/FriedChick"} className="linkstyle">
          <img src="https://www.bakersspring.com/uploads/quick/cate/OI71.png" alt="" className='img-fluid' width={100} height={100} />
           <h5>Fried Chicken</h5></Link>
          </div>
          <div>
          <Link to={"/Icecream"} className="linkstyle">
          <img src="https://img.etimg.com/thumb/msid-84939728,width-1200,height-900,imgsize-381352,resizemode-8,quality-100/magazines/panache/from-the-us-russia-to-india-an-ice-cream-bowl-has-a-long-political-history.jpg" alt=""  className='img-fluid' width={100} height={100}/>
           <h5>Ice Cream</h5></Link>
          </div>
          <div>
          <Link to={"/BirthdayCakes"} className="linkstyle">
          <img src="https://mrbrownbakery.com/image/images/GJ7uCwGiteTF24HTWBclkziVTdhpQeZWH23MvQfq.jpeg" alt="" className='img-fluid' width={100} height={100} />
           <h5>Cakes</h5></Link>
          </div>
          </div>
        </Row>
        <Outlet/>
        <FCarsol1/>
    </Container>
  )
}
