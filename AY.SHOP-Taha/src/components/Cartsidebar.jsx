// CartSidebar.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";

const CartSidebar = ({ isOpen, onClose, products }) => {
  const { cart, removeFromCart, onQuantityChange } = useContext(CartContext);

  const totalPrice = cart.reduce((total, cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);

    const handleCheckout = () => {
      // Rediriger vers la page de paiement
      window.location.href = "/checkout";
    };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2 id="cart-title" className="text-lg font-semibold">
            Shopping Cart
          </h2>
          <button onClick={onClose} className="text-xl" aria-label="Close cart">
            <IoClose />
          </button>
        </div>

        {cart.length > 0 ? (
          <div className="p-5 space-y-4 overflow-y-auto max-h-[80vh]">
            {cart.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.id);
              if (!product) return null;

              return (
                <CartItem
                  key={cartItem.id}
                  item={cartItem}
                  product={product}
                  onQuantityChange={onQuantityChange} // Passez la fonction ici
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </div>
        ) : (
          <div className="p-5 text-center text-gray-500">
            Your cart is empty.
          </div>
        )}

        {cart.length > 0 && (
          <div className="p-5 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex gap-6">
              <button
                className="w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => console.log("View Cart clicked")}
              >
                View Cart
              </button>
              <button
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
