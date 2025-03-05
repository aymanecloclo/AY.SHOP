import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([])
  console.log(cart);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        // Si le produit est déjà dans le panier, on augmente sa quantité
        return prevCart.map((item) =>
          item.id === product.id ? { id : item.id, quantity: item.quantity + 1 } : item
        // {...item.id , quantity: item.quantity + 1}
        );
      } else {
        // Sinon, on l'ajoute avec une quantité initiale de 1
        return [...prevCart, { id : product.id, quantity: 1 }];
      }
    });
  
    // Met à jour le nombre total d'articles dans le panier
    setCartCount((prevCount) => prevCount + 1);
  };
  

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);
  
      if (existingProduct?.quantity > 1) {
        // Si la quantité est >1, on la décrémente
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Sinon, on supprime complètement le produit
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  
    setCartCount((prevCount) => prevCount - 1);
  };
  

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
