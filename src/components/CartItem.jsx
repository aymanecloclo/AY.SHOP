import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

// Initialize Cloudinary
const cld = new Cloudinary({ cloud: { cloudName: "dqboz50e8" } });

const CartItem = ({ item, product, onQuantityChange, removeFromCart }) => {
  // Generate Cloudinary image
  const img = product.imgId
    ? cld
        .image(product.imgId)
        .format("auto")
        .quality("auto")
        .resize(auto().gravity(autoGravity()).width(500).height(500))
    : null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between rounded-xl border border-gray-300 bg-white p-5 shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 transition-all">
      {/* Image */}
      <div className="shrink-0 mb-4 md:mb-0 md:mr-6">
        {img ? (
          <AdvancedImage
            cldImg={img}
            className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-lg"
            alt={product.name}
          />
        ) : (
          <div className="h-20 w-20 md:h-24 md:w-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              No Image
            </span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2 md:space-y-4 w-full">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {product.description}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => item.quantity > 1 && onQuantityChange(item.id, "decrease")}
            type="button"
            className="flex items-center justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-all focus:ring-2 focus:ring-indigo-500"
            aria-label="Decrease quantity"
          >
            <svg className="w-4 h-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
            </svg>
          </button>

          <input
            type="text"
            value={item.quantity}
            readOnly
            className="w-12 text-center text-sm font-medium text-gray-900 bg-transparent border-0 focus:outline-none dark:text-white"
            aria-label="Quantity"
          />

          <button
            onClick={() => onQuantityChange(item.id, "increase")}
            type="button"
            className="flex items-center justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-all focus:ring-2 focus:ring-indigo-500"
            aria-label="Increase quantity"
          >
            <svg className="w-4 h-4 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Price & Remove Button */}
      <div className="flex flex-col items-center md:items-end gap-3 md:w-36">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {(product.price * item.quantity).toFixed(2)} Dhs
        </p>
        
        <button
          onClick={() => removeFromCart(item.id)}
          type="button"
          className="flex items-center text-sm font-medium text-red-600 hover:text-red-500 dark:text-red-500 transition-all focus:ring-2 focus:ring-red-500"
          aria-label="Remove item"
        >
          <svg className="mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
