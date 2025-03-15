import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { removeFromCart, onQuantityChange } from "../slicers/cartSlice";

const CartSidebar = ({ isOpen, onClose, products }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculer le prix total du panier
  const totalPrice = cart.reduce((total, cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);

  // Rediriger vers la page de paiement
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full md:w-4/12 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        {/* Header */}
        <div className="p-5 flex justify-between  items-center border-b">
          <h2 id="cart-title" className="text-lg font-semibold">
            Shopping Cart
          </h2>
          <button onClick={onClose} className="text-xl" aria-label="Close cart">
            <IoClose />
          </button>
        </div>

        {/* Cart Items */}
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
                  onQuantityChange={(id, action) =>
                    dispatch(onQuantityChange({ productId: id, action }))
                  }
                  removeFromCart={(id) => dispatch(removeFromCart(id))}
                />
              );
            })}
          </div>
        ) : (
          <div className="p-5 text-center text-gray-500">
            Your cart is empty.
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button
                className="w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => console.log("View Cart clicked")}
              >
                View Details
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
