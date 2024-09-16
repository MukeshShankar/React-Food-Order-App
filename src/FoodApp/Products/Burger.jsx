import React, { useState } from 'react'
import {Container,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import VegBur from '../Assets/Json/Vburger.json'
import NVegBur from '../Assets/Json/NVburger.json'
import { Prdcard } from './Prdcard';
import './FoodPrd.css'

function Burger({cart, setCart}) {
    const[VBurger]=useState(VegBur);
    const[NVBurger]=useState(NVegBur);
  return (
    <Container className="Foodlist">
      <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
      <h1 className="mt-2 mb-2 text-center">Veg Burger</h1>
        {VBurger.map((item)=>
        <Card key={item.id}  className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
        <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
        <h1 className="mt-2 mb-2 text-center">Non-Veg Burger</h1>
        {NVBurger.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
        </Container>
  )
}

export default Burger
