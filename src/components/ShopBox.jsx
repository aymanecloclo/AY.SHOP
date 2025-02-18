
import Categories from '../data/Categories'
import { useState ,useCallback} from "react";
import FilterBox from '@/assets/sous-components/FilterBox';
import ShopSection from './ShopSection';
import { IoCloseSharp } from "react-icons/io5";
import productsAll from '@/data/productsALL';
const ShopBox= (params) => {
const [showMobileFilter,setShowMobileFilter]=useState(true);
const [sliderValue, setSliderValue] = useState(0);
const [filters, setFilters] = useState({
  category: '',
  size: '',
  color: '',
  rating: '',
  operatingSystem: '',
  sliderValue:0,
});
const [filtereProduct,setFilteredProduct]=useState(productsAll);

const handleSliderChange = useCallback((value) => {
  setSliderValue(value);
  setFilteredProduct(productsAll.filter((product) => product.price<= value));
 
}, []);

const handleShowMobileFilter=()=>{
  setShowMobileFilter(prev=>!prev);
}

const handleFilterChange = useCallback((filterType, value) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [filterType]: value,
  }));
  
  setFilteredProduct(
    productsAll.filter((product) => product[filterType]== value)
  );
  if (!showMobileFilter){
    setShowMobileFilter(prev=>!prev);
   
  }
}, []); 


  return(
    <>
   <div className=" flex md:flex-row  flex-col my-24 mx-4 ">
   
      <FilterBox className="hidden md:flex " Categories={Categories}  handleFilterChange={handleFilterChange}  handleSliderChange={handleSliderChange} sliderValue={sliderValue}/>
   
      {/* Main Content (for example, products) */}
      <div className="">
        {/* Content goes here */}
        <ShopSection productsAll={filtereProduct} handleShowMobileFilter={handleShowMobileFilter} />
        
      </div>
    </div>
    <div className={` bg-white ${showMobileFilter? 'hidden ':''}  z-50 md:hidden  w-full h-screen fixed top-0  flex-col px-5  `}>
    <IoCloseSharp onClick={handleShowMobileFilter} size={30} className=' text-gray-500  cursor-pointer z-50 absolute top-4 right-6 '  />

       <h1 className='text-black z-50 py-10 text-center text-2xl font-semibold'>Filter</h1>
       
      <FilterBox className=' ' Categories={Categories}  handleFilterChange={handleFilterChange}   handleSliderChange={handleSliderChange} sliderValue={sliderValue}/>
      </div>
    </>
  )
}
export default ShopBox;
 