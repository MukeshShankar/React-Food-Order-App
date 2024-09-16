import React, { useState } from 'react'
import {Container,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import VPizz from '../Assets/Json/Veg Pizza.json'
import NVPizz from '../Assets/Json/NVeg Pizza.json'
import { Prdcard } from './Prdcard';
import './FoodPrd.css'

function Pizza({cart, setCart}) {
    const[VPizza]=useState(VPizz);
    const[NVPizza]=useState(NVPizz);
  return (
    <Container className="Foodlist">
      <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
      <h1 className="mt-2 mb-2 text-center">Veg Pizza's</h1>
        {VPizza.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
        <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
        <h1 className="mt-2 mb-2 text-center">Non-Veg Pizza's</h1>
        {NVPizza.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
    </Container>
  )
}

export default Pizza
