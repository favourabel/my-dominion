import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import Bookingpage from "./pages/Bookingpage";

function App() {

  // GLOBAL CART
  const [cart, setCart] = useState([]);

  // ADD TO CART FUNCTION
  const addToCart = (product) => {

    setCart((prev) => {

      const existingProduct = prev.find(
        item => item.id === product.id
      );

      // IF PRODUCT EXISTS
      if (existingProduct) {

        return prev.map((item) =>

          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );

      }

      // NEW PRODUCT
      return [
        ...prev,
        {
          ...product,
          quantity: 1
        }
      ];

    });

  };

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={ <HomePage addToCart={addToCart} /> } />

        <Route path="/order" element={ <OrderPage cart={cart} /> } />

         <Route path="/booking" element={<Bookingpage cart={cart} />}/>
       
      </Routes>

    </BrowserRouter>

  );
}

export default App;