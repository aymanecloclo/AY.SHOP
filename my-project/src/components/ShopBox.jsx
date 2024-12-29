
import Categories from '../data/Categories'
import { useState ,useCallback} from "react";
import FilterBox from '@/assets/sous-components/FilterBox';
import ShopSection from './ShopSection';
import productsAll from '@/data/productsALL';
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

const handleSliderChange = useCallback((value) => {
  setSliderValue(value);
}, []);



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
 