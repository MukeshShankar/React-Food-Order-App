import React, { useState } from 'react'
import {Container,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Ice from '../Assets/Json/Icecrem.json'
import { Prdcard } from './Prdcard';
import './FoodPrd.css'

function Icecream({cart, setCart}) {
    const[icecream]=useState(Ice);
  return (
    <Container className="Foodlist">
      <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
      <h1 className="mt-2 mb-2 text-center">Ice Cream's</h1>
        {icecream.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
    </Container>
  )
}

export default Icecream