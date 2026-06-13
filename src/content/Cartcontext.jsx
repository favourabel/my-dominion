import { createContext, useContext, useState } from "react";

// CREATE CONTEXT
const CartContext = createContext();

// PROVIDER COMPONENT
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// CUSTOM HOOK
export function useCart() {
  return useContext(CartContext);
}