import React, { useState } from "react";
import Breadcrumb from "@/assets/sous-components/Breadcrumb";
import ProductCard from "./ProductCard";

const ShopSection = ({
  productsAll = [], 
  handleShowMobileFilter,
  setFilteredProduct,
}) => {
  const [number, setNumber] = useState(24);

  // Vérifiez si productsAll est défini et non vide
  if (!productsAll || productsAll.length === 0) {
    return <div>Loading products...</div>; // Afficher un indicateur de chargement
  }

  return (
    <section className="w-full bg-gray-50 py-8 mt-6 antialiased dark:bg-gray-900 md:py-12 mx-0 px-0">
      <div className="w-11/12 2xl:px-0">
        <Breadcrumb
          handleShowMobileFilter={handleShowMobileFilter}
          setFilteredProduct={setFilteredProduct}
          filteredProduct={productsAll}
        />
        <div className="w-full mb-4 grid grid-cols-2 gap-4 mx-0 md:mx-8 md:mb-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {productsAll.slice(0, number).map((product, index) => (
            <ProductCard key={product.id || index} product={product} />
          ))}
        </div>
        {number < productsAll.length && (
          <div className="w-full text-center">
            <button
              type="button"
              onClick={() => setNumber(productsAll.length)}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopSection;
