import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Food App

import { THome } from "./FoodApp/Home/THome";
import { ShopCart } from "./FoodApp/Fcart/ShopCart";
import { Mnubar } from "./FoodApp/Mnubar";
import Pizza from "./FoodApp/Products/Pizza";
import Burger from "./FoodApp/Products/Burger";
import FriedChick from "./FoodApp/Products/Fried Chick";
import Icecream from "./FoodApp/Products/Icecream";
import Cakes from "./FoodApp/Products/BirthdayCakes";
import Subs from "./FoodApp/Products/Subs";
import FFooter from "./FoodApp/Footer/FFooter";
import Fcontact from "./FoodApp/Contact/Fcontact";
import FAbout from "./FoodApp/FAbout";
import FLogin from "./FoodApp/Home/FLogin";

function App() {
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart([...cart, product]);
  };
  const [login,setLogin]=useState(false);

  return (
    <>
    {login?<FLogin setLogin={setLogin}/>:<></>}
    <div className="App">
    <Mnubar setLogin={setLogin} cart={cart} setCart={setCart}/>
      <Routes>
        <Route>
          <Route path="/" element={<THome cart={cart} setCart={setCart}/>}>
            <Route path="Pizza" element={<Pizza cart={cart} setCart={setCart}/>}/>
            <Route path="Burger" element={<Burger cart={cart} setCart={setCart}/>}/>
            <Route path="Subs" element={<Subs cart={cart} setCart={setCart} />}/>
            <Route path="FriedChick" element={<FriedChick cart={cart} setCart={setCart}/>}/>
            <Route path="Icecream" element={<Icecream cart={cart} setCart={setCart}/>}/>
            <Route path="BirthdayCakes" element={<Cakes cart={cart} setCart={setCart} />}/>
          </Route>
          <Route path="/FAbout" element={<FAbout/>}/>
          <Route path="/Fcontact" element={<Fcontact/>}/>
          <Route path="/ShopCart" element={<ShopCart cart={cart} setCart={setCart}/>}/>
        </Route>
      </Routes>
      <FFooter/>
     </div>
     </>
  );
}

export default App;
