import Categories from '../data/Categories';
import { useState, useCallback } from 'react';
import FilterBox from '@/assets/sous-components/FilterBox';
import ShopSection from './ShopSection';
import { IoCloseSharp } from 'react-icons/io5';
import productsAll from '@/data/productsALL';

const ShopBox = (params) => {
  const [showMobileFilter, setShowMobileFilter] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    color: '',
    rating: '',
    operatingSystem: '',
    sliderValue: 0,
  });


  const [filteredProduct, setFilteredProduct] = useState(productsAll);

  const applyFilters = (updatedFilters) => {
    const filtered = productsAll.filter((product) => {
      return (
        (updatedFilters.category ? product.category === updatedFilters.category : true) &&
        (updatedFilters.size ? product.size === updatedFilters.size : true) &&
        (updatedFilters.color ? product.color === updatedFilters.color : true) &&
        (updatedFilters.rating ? product.rating === updatedFilters.rating : true) &&
        (updatedFilters.operatingSystem ? product.operatingSystem === updatedFilters.operatingSystem : true) &&
        (updatedFilters.sliderValue ? product.price <= updatedFilters.sliderValue : true)
      );
    });
    

    setFilteredProduct(filtered);
  };

  const handleSliderChange = useCallback((value) => {
    setSliderValue(value);
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, sliderValue: value };
      applyFilters(updatedFilters);
      return updatedFilters;
    });
  }, []);

  const handleFilterChange = useCallback((filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [filterType]: prevFilters[filterType] === value ? '' : value,
      };
      applyFilters(updatedFilters);
      return updatedFilters;
    });

    if (!showMobileFilter) {
      setShowMobileFilter(true);
    }
  }, []);

  const handleShowMobileFilter = () => {
    setShowMobileFilter((prev) => !prev);
  };

  return (
    <>
      <div className=" w-full flex md:flex-row flex-col my-24 mx-4">
        <FilterBox
          className="hidden md:flex"
          Categories={Categories}
          handleFilterChange={handleFilterChange}
          handleSliderChange={handleSliderChange}
          sliderValue={sliderValue}
          activeFilters={filters}
        />

   
          <ShopSection
            productsAll={filteredProduct}
            handleShowMobileFilter={handleShowMobileFilter}
            handleFilterChange={handleFilterChange}
            setFilteredProduct = {setFilteredProduct}
          />
       
      </div>

      <div
        className={`bg-white ${showMobileFilter ? 'hidden' : ''} z-50 md:hidden w-full h-screen fixed top-0 flex-col px-5`}
      >
        <IoCloseSharp
          onClick={handleShowMobileFilter}
          size={30}
          className="text-gray-500 cursor-pointer z-50 absolute top-4 right-6"
        />

        <h1 className="text-black z-50 py-10 text-center text-2xl font-semibold">Filter</h1>

        <FilterBox
          className=""
          Categories={Categories}
          handleFilterChange={handleFilterChange}
          handleSliderChange={handleSliderChange}
          sliderValue={sliderValue}
          activeFilters={filters}
        />
      </div>
    </>
  );
};

export default ShopBox;
