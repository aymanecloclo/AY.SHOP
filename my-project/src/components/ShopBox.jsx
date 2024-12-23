
import Categories from '../data/Categories'
import { useState } from "react";
import FilterBox from '@/assets/sous-components/FilterBox';
import ProductList from '@/assets/sous-components/ProductCard';
import ShopSection from './ShopSection';
const ShopBox= (params) => {
const [sliderValue, setSliderValue] = useState(1100);

const handleSliderChange = (value) => {
  setSliderValue(value); 
};
const productsAll = [
  {
    id: 1,
    category: 'PC Portable',
    name: 'Laptop X',
    price: 999.99,
    rating: 4,
    color: 'Black',
    size: 'Medium',
    operatingSystem: 'Windows',
    brand: 'Dell',
    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg', // Replace with the actual image URL
  },
  {
    id: 2,
    category: 'PC Gamer',
    name: 'Gamer Pro',
    price: 1500.00,
    rating: 5,
    color: 'Red',
    size: 'Large',
    operatingSystem: 'Windows',
    brand: 'Alienware',
    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg', // Replace with the actual image URL
  },
  {
    id: 3,
    category: 'Telephone',
    name: 'SmartPhone Z',
    price: 699.99,
    rating: 4.5,
    color: 'Blue',
    size: 'Medium',
    operatingSystem: 'Android',
    brand: 'Samsung',
    img: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg', // Replace with the actual image URL
  },
  // Add more products here
];

  return(
    <>
   <div className="flex my-24 mx-4 ">
      <FilterBox Categories={Categories} handleSliderChange={handleSliderChange} sliderValue={sliderValue}/>

      {/* Main Content (for example, products) */}
      <div className="w-full sm:w-9/12 md:w-10/12">
        {/* Content goes here */}
        <ShopSection productsAll={productsAll}/>
        
      </div>
    </div>
    </>
  )
}
export default ShopBox;
 