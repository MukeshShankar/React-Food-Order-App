import React, { useState } from 'react'
import {Container,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import cake from '../Assets/Json/Cakes.json'
import { Prdcard } from './Prdcard';
import './FoodPrd.css'

function Cakes({cart, setCart}) {
    const[Cakes]=useState(cake);
  return (
    <Container className="Foodlist">
      <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
      <h1 className="mt-2 mb-2 text-center">Occasion Cakes</h1>
        {Cakes.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
    </Container>
  )
}

export default Cakes