import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

// CartContext.js
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    setCartTotal(
      cart.reduce((total, item) => total + item.quantity * item.price, 0)
    );
  }, [cart]);

  // Fonction pour augmenter ou diminuer la quantité
  const onQuantityChange = (productId, action) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    });
  };

  // Ajouter un produit au panier
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        toast.success(`${product.name} quantity increased!`);
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`${product.name} added to cart!`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Retirer un produit du panier
const removeFromCart = (productId) => {
  setCart((prevCart) => {
    const existingProduct = prevCart.find((item) => item.id === productId);

    if (existingProduct) {
      toast.error(`${existingProduct.name} removed from cart!`);
      // Directly remove the item from the cart
      return prevCart.filter((item) => item.id !== productId);
    }

    return prevCart;
  });
};

  // Vider complètement le panier
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.info("Cart cleared!");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        clearCart,
        cartOpen,
        setCartOpen,
        onQuantityChange, // Ajoutez cette fonction
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
