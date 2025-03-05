import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IoClose } from "react-icons/io5";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

// Initialize Cloudinary
const cld = new Cloudinary({ cloud: { cloudName: 'dqboz50e8' } });

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartCount, cart, removeFromCart } = useContext(CartContext);

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={onClose} // Clicking outside closes the cart
        ></div>
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button onClick={onClose} className="text-xl">
            <IoClose />
          </button>
        </div>

        {cart.length > 0 ? (
          <div className="p-5 space-y-4 overflow-y-auto max-h-[80vh]">
            {cart.map((item, index) => {
              // Generate the Cloudinary image URL
              let img;

              if (item.imgId) {
                img = cld
                  .image(item.imgId)
                  .format("auto")
                  .quality("auto")
                  .resize(auto().gravity(autoGravity()).width(500).height(500));
              }

              return (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <AdvancedImage cldImg={img} className="w-12 h-12 object-cover rounded"/>
                  <div className="flex-1 ml-3">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-semibold">${item.price}</span>
                  {/* Close button to remove item from cart */}
                  <button 
                    onClick={() => removeFromCart(item.id)} // Assuming `item.id` is the unique identifier
                    className="text-gray-500 hover:text-red-500"
                  >
                    <IoClose />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-5 text-center text-gray-500">Your cart is empty.</div>
        )}

        {/* Updated Bottom Section */}
        {cart.length > 0 && (
          <div className="p-5 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-6">
              <button 
                className="w-full bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 transition-colors"
                onClick={() => {
                  // Add logic for "Voir Panier" button
                  console.log("Voir Panier clicked");
                }}
              >
                Voir Panier
              </button>
              <button 
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => {
                  // Add logic for "Commander" button
                  console.log("Commander clicked");
                }}
              >
                Commander
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;