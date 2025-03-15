import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

// Initialize Cloudinary
const cld = new Cloudinary({ cloud: { cloudName: "dqboz50e8" } });

const CartItem = ({ item, product, onQuantityChange, removeFromCart }) => {
  let img;
  if (product.imgId) {
    img = cld
      .image(product.imgId)
      .format("auto")
      .quality("auto")
      .resize(auto().gravity(autoGravity()).width(500).height(500));
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-lg hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 md:p-6 transition-all">
      {/* Image */}
      <a href="#" className="shrink-0 mb-4 md:mb-0 md:order-1">
        <AdvancedImage
          cldImg={img}
          className="h-20 w-20 object-cover rounded-md dark:hidden"
        />
        <AdvancedImage
          cldImg={img}
          className="hidden h-20 w-20 object-cover rounded-md dark:block"
        />
      </a>

      {/* Product Details */}
      <div className="flex-1 space-y-4 md:order-2 md:max-w-md">
        <a
          href="#"
          className="block text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 hover:underline"
        >
          {product.name}
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {product.description}
        </p>

        <div className="flex items-center gap-4">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            {/* Bouton Moins */}
            <button
              onClick={() => {
                if (item.quantity > 1) {
                  onQuantityChange(item.id, "decrease");
                }
              }}
              type="button"
              className="inline-flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
              aria-label="Decrease quantity"
            >
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>

            {/* Quantité */}
            <input
              type="text"
              value={item.quantity}
              readOnly
              className="w-10 text-center text-sm font-medium text-gray-900 bg-transparent border-0 focus:outline-none dark:text-white"
              aria-label="Quantity"
            />

            {/* Bouton Plus */}
            <button
              onClick={() => onQuantityChange(item.id, "increase")}
              type="button"
              className="inline-flex items-center justify-center p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
              aria-label="Increase quantity"
            >
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="text-right md:order-3 md:w-32 me-2">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          ${(product.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <div className="flex items-center justify-center md:order-4">
        <button
          onClick={() => removeFromCart(item.id)}
          type="button"
          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <svg
            className="mr-1 h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
