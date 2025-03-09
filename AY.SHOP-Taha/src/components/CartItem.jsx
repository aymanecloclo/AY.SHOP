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
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
      <a href="#" className="shrink-0 md:order-1">
        <AdvancedImage cldImg={img} className="h-20 w-20 dark:hidden" />
        <AdvancedImage cldImg={img} className="hidden h-20 w-20 dark:block" />
      </a>

      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <button
            onClick={() => onQuantityChange(item.id, "decrease")} // Diminuer la quantité
            type="button"
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            aria-label="Decrease quantity"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
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
          <input
            type="text"
            value={item.quantity}
            readOnly
            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
            aria-label="Quantity"
          />
          <button
            onClick={() => onQuantityChange(item.id, "increase")} // Augmenter la quantité
            type="button"
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            aria-label="Increase quantity"
          >
            <svg
              className="h-2.5 w-2.5 text-gray-900 dark:text-white"
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
        <div className="text-end md:order-4 md:w-32">
          <p className="text-base font-bold text-gray-900 dark:text-white">
            ${(product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <a
          href="#"
          className="text-base font-medium text-gray-900 hover:underline dark:text-white"
        >
          {product.name}
        </a>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
            aria-label="Remove item"
            onClick={() => removeFromCart(item.id)}
          >
            <svg
              className="me-1.5 h-5 w-5"
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
    </div>
  );
};

export default CartItem;
