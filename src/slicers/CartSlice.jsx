import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productsAll from "@/data/productsALL";

// Initialiser les produits avec une quantité de 1 par défaut

const initialProducts = [];

// Extraire les trois premiers éléments
const threeProducts = initialProducts.slice(0, 3);


// État initial
const initialState = {
  cart: threeProducts,
  cartCount: initialProducts.reduce((total, item) => total + item.quantity, 0),
  cartTotal: initialProducts.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  ),
  cartOpen: false, // Panier fermé par défaut
};

// Création du slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Ajouter un produit au panier
    addToCart: (state, action) => {
      const product = action.payload;
      if (!product || !product.id) {
        toast.error("Invalid product data");
        return;
      }

      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
        toast.success(`${product.name} quantity increased!`);
      } else {
        state.cart.push({ ...product, quantity: 1 });
        toast.success(`${product.name} added to cart!`);
      }

      // Mettre à jour les totaux
      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    // Retirer un produit du panier
    removeFromCart: (state, action) => {
      const productId = action.payload;
      if (!productId) {
        toast.error("Invalid product ID");
        return;
      }

      const existingProduct = state.cart.find((item) => item.id === productId);

      if (existingProduct) {
        state.cart = state.cart.filter((item) => item.id !== productId);
        toast.error(`${existingProduct.name} removed from cart!`);
      }

      // Mettre à jour les totaux
      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    // Vider complètement le panier
    clearCart: (state) => {
      state.cart = [];
      toast.info("Cart cleared!");

      // Mettre à jour les totaux
      state.cartCount = 0;
      state.cartTotal = 0;
    },

    // Modifier la quantité d'un produit
    onQuantityChange: (state, action) => {
      const { productId, action: quantityAction } = action.payload;
      if (!productId || !quantityAction) {
        toast.error("Invalid quantity change request");
        return;
      }

      const product = state.cart.find((item) => item.id === productId);

      if (product) {
        if (quantityAction === "increase") {
          product.quantity += 1;
        } else if (quantityAction === "decrease" && product.quantity > 1) {
          product.quantity -= 1;
        } else if (quantityAction === "decrease" && product.quantity === 1) {
          toast.warning("Quantity cannot be less than 1");
        }
      }

      // Mettre à jour les totaux
      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    // Définir directement la quantité d'un produit
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      if (!productId || quantity < 1) {
        toast.error("Invalid quantity");
        return;
      }

      const product = state.cart.find((item) => item.id === productId);

      if (product) {
        product.quantity = quantity;
      }

      // Mettre à jour les totaux
      state.cartCount = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.cartTotal = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },

    // Ouvrir/fermer le panier (bascule entre true et false)
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },

    // Définir explicitement l'état du panier (ouvert ou fermé)
    setCartOpen: (state, action) => {
      state.cartOpen = action.payload;
    },
  },
});

// Export des actions
export const {
  addToCart,
  removeFromCart,
  clearCart,
  onQuantityChange,
  setQuantity,
  toggleCart,
  setCartOpen,
} = cartSlice.actions;

// Export du reducer
export default cartSlice.reducer;