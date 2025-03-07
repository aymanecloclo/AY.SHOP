import { useContext, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import { IoCartOutline } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsCartPlus } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { CartContext} from '../context/CartContext'

import DropdownButton from "./DropdownButton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { FaBagShopping } from "react-icons/fa6";

const cld = new Cloudinary({ cloud: { cloudName: "dqboz50e8" } });

const filterOptions = [
  { label: "The most popular", href: "#" },
  { label: "Newest", href: "#" },
  { label: "Increasing price", href: "#" },
  { label: "Decreasing price", href: "#" },
  { label: "No. reviews", href: "#" },
  { label: "Discount %", href: "#" },
];

const Breadcrumb = ({
  handleShowMobileFilter,
  setFilteredProduct,
  filteredProduct,
}) => {
  return (
    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8 mx-0 md:mx-8">
      <div>
        
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="me-2.5 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400 rtl:rotate-180"
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
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                >
                  Products
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400 rtl:rotate-180"
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
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                  Electronics
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Electronics
        </h2>
      </div>
      <div className="flex items-center space-x-4 ">
        <DropdownButton
          products={filteredProduct}
          setFilteredProducts={setFilteredProduct}
        />
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  let img;

  if (product.imgId) {
    img = cld
      .image(product.imgId)
      .format("auto")
      .quality("auto")
      .resize(auto().gravity(autoGravity()).width(500).height(500));
  }

  const [showModal, setShowModal] = useState(false);
  const { addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    setShowModal(true);
    addToCart(product);
  };
  const { cartOpen, setCartOpen } = useContext(CartContext);
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="md:w-full">
        <AdvancedImage cldImg={img} />
      </div>

      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
            {product.category}
          </span>
          <div className="flex items-center justify-end gap-1 ">
            <button
              type="button"
              data-tooltip-target="tooltip-quick-look"
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
          {product.name}
        </a>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-4 w-4 ${
                  index < product.rating ? "text-yellow-400" : "text-gray-300"
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
              {product.rating}
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              ({product.rating * 100})
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
              {product.operatingSystem}
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
              {product.size}
            </p>
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between sm:gap-4">
          <span className="sm:text-sm md:text-base text-xs font-semibold text-gray-900 dark:text-white flex gap-1 items-center">
            {product.price} <span>DH</span>
          </span>
          <button
            className="hover:bg-gray-100 px-2 py-2 rounded-full transition-all duration-300 ease-in-out"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            <AlertDialog>
              <AlertDialogTrigger>
                <span className="relative inline-block w-5 h-5">
                  <BsCartPlus
                    size={20}
                    className={`absolute inset-0 transition-opacity transform duration-300`}
                  />
                  {/* <FaBagShopping
                size={20}
                color="green"
                className={`absolute inset-0 transition-opacity transform duration-300 ${cartIcon ? "opacity-0 scale-90" : "opacity-100 scale-100"
                  }`}
              /> */}
                </span>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle> Item added successfully!</AlertDialogTitle>
                  <AlertDialogDescription></AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => setCartOpen(!cartOpen)}>
                    {" "}
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

const ShopSection = ({
  productsAll,
  handleShowMobileFilter,
  setFilteredProduct,
}) => {
  const [number, setNUmber] = useState(24);
  return (
    <>
      <section className= " w-full bg-gray-50 py-8 mt-6 antialiased dark:bg-gray-900 md:py-12 mx-0 px-0 ">
        <div className=" w-11/12 2xl:px-0 ">
          <Breadcrumb
            handleShowMobileFilter={handleShowMobileFilter}
            setFilteredProduct={setFilteredProduct}
            filteredProduct={productsAll}
          />
          <div className=" w-full mb-4 grid grid-cols-2 gap-4 mx-0 md:mx-8 md:mb-8 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 ">
            {productsAll.slice(0, number).map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
          {number < productsAll.length && (
            <div className="w-full text-center">
              <button
                type="button"
                onClick={() => {
                  setNUmber(productsAll.length);
                }}
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Show more
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default ShopSection;
