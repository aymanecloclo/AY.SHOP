import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import { BsCartPlus } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, toggleCart } from "../slicers/cartSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Initialize Cloudinary
const cld = new Cloudinary({ cloud: { cloudName: "dqboz50e8" } });

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartOpen = useSelector((state) => state.cart.cartOpen);

  // Vérifiez si le produit est défini
  if (!product) {
    console.error("Product is undefined");
    return null; // Retourner null ou un message d'erreur
  }

  // Déstructurer les propriétés avec des valeurs par défaut
  const {
    imgId = "default-image-id",
    name = "Unnamed Product",
    price = 0,
    category = "Uncategorized",
    rating = 0,
    operatingSystem = "N/A",
    size = "N/A",
  } = product;

  let img;
  if (imgId) {
    img = cld
      .image(imgId)
      .format("auto")
      .quality("auto")
      .resize(auto().gravity(autoGravity()).width(500).height(500));
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatcher l'action addToCart
  };

  const handleToggleCart = () => {
    dispatch(toggleCart()); // Dispatcher l'action toggleCart
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="md:w-full">
        {img ? (
          <AdvancedImage cldImg={img} />
        ) : (
          <div className="h-40 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
      </div>

      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {category}
          </span>
          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Quick look</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {name}
        </a>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-4 w-4 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            ))}
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {rating}
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              ({rating * 100})
            </p>
          </div>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {operatingSystem}
            </p>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9l3 3-3 3m4-6l3 3-3 3m4-6l3 3-3 3m4-6l3 3-3 3m4-6l3 3-3 3"
              />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {size}
            </p>
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between sm:gap-4">
          <span className="sm:text-sm md:text-base text-xs font-semibold text-gray-900 dark:text-white flex gap-1 items-center">
            {price} <span>DH</span>
          </span>
          <button
            className="hover:bg-gray-100 px-2 py-2 rounded-full transition-all duration-300 ease-in-out"
            onClick={handleAddToCart}
          >
            <AlertDialog>
              <AlertDialogTrigger>
                <span className="relative inline-block w-5 h-5">
                  <BsCartPlus size={20} />
                </span>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Item added successfully!</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleToggleCart}>
                    View Cart
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
