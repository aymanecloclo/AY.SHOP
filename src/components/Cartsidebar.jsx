import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoClose, IoTrashBin, IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import CartItem from "./CartItem";
import {
  removeFromCart,
  onQuantityChange,
  clearCart,
} from "../slicers/cartSlice";

const CartSidebar = ({ isOpen, onClose, products }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((total, cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);

  // Handle checkout
  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  // Handle clear cart with confirmation
  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      dispatch(clearCart());
    }
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
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <h2 id="cart-title" className="text-xl font-bold text-gray-800">
            Shopping Cart
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Close cart"
          >
            <IoClose />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh] md:max-h-[70vh]">
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
          <div className="p-6 flex flex-col items-center justify-center h-[60vh] md:h-[70vh] text-gray-500">
            <IoCart className="text-6xl mb-4" />
            <p className="text-lg">Your cart is empty.</p>
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-gray-800">Total:</span>
              <span className="text-lg font-bold text-gray-900">
                {totalPrice.toFixed(2)} Dhs
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={handleClearCart}
                aria-label="Clear cart"
              >
                <IoTrashBin className="text-xl" />
                Clear Cart
              </button>

              <button
                className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={handleCheckout}
                aria-label="Continue to payment"
              >
                <FaCreditCard className="text-xl" />
                Continue to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;