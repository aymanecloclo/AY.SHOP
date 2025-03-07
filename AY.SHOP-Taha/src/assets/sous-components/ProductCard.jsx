import React from 'react';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';


const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-lg h-[400px] w-[280px] group gap-[1em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="container text-gray-800 z-[2] relative font-nunito flex flex-col gap-[1em]">
        <div className="h-fit w-full">
          <h1
            className="card_heading text-[1.5em] font-bold tracking-[.1em] text-gray-900"
          >
            {product.name}
          </h1>
          <p
            className="text-[1.1em] text-gray-600"
          >
            By {product.brand}
          </p>
        </div>

        {/* Image du produit */}
        <div className="flex justify-center items-center">
          <img
            src={product.img}
            alt={product.name}
            className="h-[200px] w-[200px] object-cover rounded-lg"
          />
        </div>

        <div className="flex justify-between items-center w-full gap-[1.5em]">
          <div className="flex gap-[0.5em]">
            <FaStar className="h-[1.5em] w-[1.5em] text-yellow-400" />
            <FaShoppingCart className="h-[1.5em] w-[1.5em] text-gray-700 hover:text-green-500 transition-all duration-200 cursor-pointer" />
            <FaHeart className="h-[1.5em] w-[1.5em] text-gray-700 hover:text-red-500 transition-all duration-200 cursor-pointer" />
          </div>

          <div className="text-gray-800 font-semibold text-[1.2em]">
            {product.rating} / 5 stars
          </div>
        </div>

        {/* Catégorie */}
        <div className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
          <div className="border-2 border-gray-800 rounded-[0.5em] text-gray-800 font-semibold text-[1em] px-[0.5em] py-[0.25em] hover:bg-gray-800 hover:text-white transition-colors duration-300 cursor-pointer">
            <p>{product.category}</p>
          </div>
        </div>
      </div>
      
      {/* Description du produit */}
      <p className="text-gray-600 font-light text-[0.9em] mt-[1em] leading-[1.4em]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet officiis, dolorem ab animi magnam culpa fugit error voluptates adipisci, debitis ut fuga at nisi laborum suscipit a eos similique unde.
      </p>
    </div>
  );
};




const ProductList = ({productsAll}) => {
  return (
    <div className="flex flex-wrap justify-center gap-[2em]">
      {productsAll.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
