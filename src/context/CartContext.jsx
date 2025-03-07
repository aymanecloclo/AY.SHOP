import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart state from local storage or as an empty array
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Initialize cartCount based on the cart items
  const [cartCount, setCartCount] = useState(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  });

  // Save the cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // Update cartCount based on the current cart
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product is already in the cart, increment its quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        return [...prevCart, { id: product.id, quantity: 1 }];
      }
    });
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (existingProduct?.quantity > 1) {
        // If the quantity is greater than 1, decrement it
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // If the quantity is 1 or less, remove the product entirely
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart, cart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};