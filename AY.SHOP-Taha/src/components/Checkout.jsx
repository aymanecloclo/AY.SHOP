import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, onQuantityChange } from "../slicers/cartSlice";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import RecommendedProducts from "@/data/RecommendedProducts";
import { FaCreditCard, FaPaypal, FaTruck } from "react-icons/fa";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dqboz50e8",
  },
});

// Helper function to create Cloudinary image
const createCloudinaryImage = (imgId) => {
  return imgId
    ? cld
        .image(imgId)
        .format("auto")
        .quality("auto")
        .resize(auto().gravity(autoGravity()).width(500).height(500))
    : null;
};

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Example calculations for savings, tax, shipping, and total
  const savings = 299; // Fixed savings
  const taxRate = 0.1; // 10% tax rate
  const tax = subtotal * taxRate;
  const shipping = 99; // Fixed shipping cost
  const total = subtotal - savings + tax + shipping;

  return (
    <>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {/* Display cart items */}
                {cart.length === 0 ? (
                  <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      Your cart is empty.
                    </p>
                  </div>
                ) : (
                  cart.map((item, index) => {
                    const img = createCloudinaryImage(item.imgId);
                    return (
                      <div
                        key={item.id} // Use item.id as the key
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                      >
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <a href="#" className="shrink-0 md:order-1">
                            {img ? (
                              <AdvancedImage
                                cldImg={img}
                                className="h-20 w-20"
                                alt={item.name}
                              />
                            ) : (
                              <>
                                <img
                                  className="h-20 w-20 dark:hidden"
                                  src={item.imageLight}
                                  alt={item.name}
                                />
                                <img
                                  className="hidden h-20 w-20 dark:block"
                                  src={item.imageDark}
                                  alt={item.name}
                                />
                              </>
                            )}
                          </a>

                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    onQuantityChange({
                                      productId: item.id,
                                      action: "decrease",
                                    })
                                  )
                                }
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
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
                                className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    onQuantityChange({
                                      productId: item.id,
                                      action: "increase",
                                    })
                                  )
                                }
                                className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
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
                                {(item.price * item.quantity).toFixed(2)} Dhs
                              </p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a
                              href="#"
                              className="text-base font-medium text-gray-900 hover:underline dark:text-white"
                            >
                              {item.name}
                            </a>

                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
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
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                  />
                                </svg>
                                Add to Favorites
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
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
                      </div>
                    );
                  })
                )}
              </div>

              {/* Recommended Products */}
              <div className=" mt-6 grid gap-6 md:grid-cols-3">
                {RecommendedProducts.map((product, index) => {
                  const img = createCloudinaryImage(product.imgId);
                  return (
                    <div
                      key={product.id} // Utiliser l'ID du produit comme clé
                      className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                    >
                      <a href="#" className="overflow-hidden rounded">
                        {img ? (
                          <AdvancedImage
                            cldImg={img}
                            className="h-20 w-20"
                            alt={product.name}
                          />
                        ) : (
                          <>
                            <img
                              className="h-20 w-20 dark:hidden"
                              src={product.imageLight}
                              alt={product.name}
                            />
                            <img
                              className="hidden h-20 w-20 dark:block"
                              src={product.imageDark}
                              alt={product.name}
                            />
                          </>
                        )}
                      </a>
                      <div>
                        <a
                          href="#"
                          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                        >
                          {product.name}
                        </a>
                        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                          {product.description}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                          <span className="line-through">{` $${product.price}`}</span>
                        </p>
                        <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                           {product.price - savings} Dhs
                          {/* Appliquer les économies */}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-2.5">
                        <button
                          data-tooltip-target={`favourites-tooltip-${index}`}
                          type="button"
                          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                        >
                          <svg
                            className="h-5 w-5"
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
                              d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                            ></path>
                          </svg>
                        </button>
                        <div
                          id={`favourites-tooltip-${index}`}
                          role="tooltip"
                          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                        >
                          Add to favourites
                          <div
                            className="tooltip-arrow"
                            data-popper-arrow
                          ></div>
                        </div>

                        <button
                          type="button"
                          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          <svg
                            className="-ms-2 me-2 h-5 w-5"
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
                              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Summary */}
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Subtotal
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {subtotal.toFixed(2)} Dhs
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -{savings.toFixed(2)} Dhs
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Shipping
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {shipping.toFixed(2)} Dhs
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {tax.toFixed(2)} Dhs
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {total.toFixed(2)} Dhs
                    </dd>
                  </dl>
                </div>

                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
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
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Poursuivre le Paiement
                </h3>
                <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                  Choisissez votre méthode de paiement pour finaliser votre
                  commande.
                </p>

                <div className="space-y-6">
                  {/* Méthode de paiement : Carte de crédit */}
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="credit-card"
                      name="payment-method"
                      className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                      aria-labelledby="credit-card-label"
                    />
                    <label
                      htmlFor="credit-card"
                      id="credit-card-label"
                      className="flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                      <FaCreditCard className="text-primary-600 dark:text-primary-400" />
                      Carte de crédit
                    </label>
                  </div>

                  {/* Méthode de paiement : PayPal */}
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment-method"
                      className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                      aria-labelledby="paypal-label"
                    />
                    <label
                      htmlFor="paypal"
                      id="paypal-label"
                      className="flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                      <FaPaypal className="text-primary-600 dark:text-primary-400" />
                      PayPal
                    </label>
                  </div>

                  {/* Méthode de paiement : Paiement à la livraison */}
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="payment-method"
                      className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                      aria-labelledby="cash-on-delivery-label"
                    />
                    <label
                      htmlFor="cash-on-delivery"
                      id="cash-on-delivery-label"
                      className="flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                      <FaTruck className="text-primary-600 dark:text-primary-400" />
                      Paiement à la livraison
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-800 dark:hover:bg-gray-900 mt-6"
                  aria-label="Payer maintenant"
                >
                  <FaCreditCard className="mr-2" /> {/* Icône pour le bouton */}
                  Payer maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
