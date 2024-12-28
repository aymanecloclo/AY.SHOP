
import Categories from '../data/Categories'
import { useState ,useCallback} from "react";
import FilterBox from '@/assets/sous-components/FilterBox';
import ProductList from '@/assets/sous-components/ProductCard';
import ShopSection from './ShopSection';

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
    imgId: 'images/xblnhd1q0elrnmag0eir',
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
    imgId: 'images/alienware-gamer',
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
    imgId: 'images/samsung-phone',
  },
  // Other products...
];

const ShopBox= (params) => {

const [sliderValue, setSliderValue] = useState(1100);
const [filters, setFilters] = useState({
  category: '',
  size: '',
  color: '',
  rating: '',
  operatingSystem: ''
});
const [filtereProduct,setFilteredProduct]=useState([{}]);
console.log(filters);
const handleSliderChange = useCallback((value) => {
  setSliderValue(value);
}, []);

console.log(filtereProduct);

const handleFilterChange = useCallback((filterType, value) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [filterType]: value,
  }));
  setFilteredProduct(productsAll.filter(product=>product.category==value));

}, []); 


  return(
    <>
   <div className="flex my-24 mx-4 ">
      <FilterBox Categories={Categories}  handleFilterChange={handleFilterChange}   handleSliderChange={handleSliderChange} sliderValue={sliderValue}/>

      {/* Main Content (for example, products) */}
      <div className="w-full sm:w-9/12 md:w-10/12">
        {/* Content goes here */}
        <ShopSection productsAll={filtereProduct}/>
        
      </div>
    </div>
    </>
  )
}
export default ShopBox;
 