import React, { useState } from 'react'
import {Container,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Fried1 from '../Assets/Json/FriedChick1.json'
import Fried2 from '../Assets/Json/FriedChick2.json'
import Fried3 from '../Assets/Json/FriedChicken3.json'
import { Prdcard } from './Prdcard';
import './FoodPrd.css'

function FriedChick({cart, setCart}) {
    const[FriedChicken_1]=useState(Fried1);
    const[FriedChicken_2]=useState(Fried2);
    const[FriedChicken_3]=useState(Fried3);
  return (
    <Container className="Foodlist">
      <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
      <h1 className="mt-2 mb-2 text-center">Crispy Fried Chicken</h1>
        {FriedChicken_1.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
        <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
        <h1 className="mt-2 mb-2 text-center">Crispy Fried Boneless Strips</h1>
        {FriedChicken_2.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
        <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
        <h1 className="mt-2 mb-2 text-center">Crispy Popcorn Fried Chicken (15pcs)</h1>
        {FriedChicken_3.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
    </Container>
  )
}

export default FriedChick