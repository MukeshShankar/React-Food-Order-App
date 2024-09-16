import React, { useState } from 'react'
import {Container,Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import VSub from '../Assets/Json/VegSubs.json'
import NVSub from '../Assets/Json/NVegSubs.json'
import { Prdcard } from './Prdcard';
import './FoodPrd.css'

function Subs({cart, setCart}) {
    const[VSubs]=useState(VSub);
    const[NVSubs]=useState(NVSub);
  return (
    <Container className="Foodlist">
      <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
      <h1 className="mt-2 mb-2 text-center">Veg Subs & Salads</h1>
        {VSubs.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
        <Row lg={12} className="mt-2 mb-2 justify-content-center align-items-center flex-wrap">
        <h1 className="mt-2 mb-2 text-center">Non-Veg Subs & Salads</h1>
        {NVSubs.map((item)=>
        <Card key={item.id} className="Foodcard justify-content-center align-items-center text-center">
        <Prdcard key={item.id} item={item} cart={cart} setCart={setCart}/> 
        </Card>
        )} 
        </Row>
    </Container>
  )
}

export default Subs