import { FaLifeRing, FaStar, FaStarHalfAlt, FaApple, FaWindows, FaAndroid, FaAppleAlt } from "react-icons/fa";
import { Slider } from "@/components/ui/slider";
import { GiTShirt, GiSmartphone, GiLaptop, GiGamepad } from "react-icons/gi"; // Icônes supplémentaires

const FilterBox = ({handleSliderChange, Categories, sliderValue, handleFilterChange}) => {
    const operatingSystems = [
        { name: 'Windows', icon: <FaWindows className="text-blue-500" /> },
        { name: 'macOS', icon: <FaApple className="text-gray-700" /> },
        { name: 'Android', icon: <FaAndroid className="text-green-500" /> },
        { name: 'iOS', icon: <FaAppleAlt className="text-gray-400" /> }
    ];
    const brands = ['Apple', 'Samsung', 'Dell', 'HP', 'Asus'];
    const colors = [
      { name: 'Black', code: '#000000' },
      { name: 'White', code: '#FFFFFF' },
      { name: 'Red', code: '#FF0000' },
      { name: 'Blue', code: '#0000FF' },
      { name: 'Green', code: '#008000' }
    ];
    
 
const sizes = ['Small', 'Medium', 'Large']; 
    const ratings = [5, 4, 3, 2, 1];
   console.log('rendu')
  return (
    <div className="flex flex-col w-full sm:w-3/12 md:w-2/12 gap-12">
      {/* Categories Box */}
      <div className="categories-group w-full">
        <ul className="w-fulltext-surface dark:text-white border rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <li className="w-full border-b rounded-t-lg bg-gradient-to-r from-slate-500 to-gray-500 p-4 text-white font-bold text-lg">
            Categories
          </li>
          {Categories.map((element, index) => (
            <li
              className="w-full border-b rounded-lg bg-primary-100 p-4 text-primary-700 dark:bg-slate-900 dark:text-primary-500 flex items-center gap-2 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors cursor-pointer"
              key={index}
              onClick={()=>handleFilterChange('category',element.name)}
            >
              {element.icon}
              {element.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="price-box">
        <ul className="rounded-md w-full text-surface dark:text-white border bg-white dark:bg-gray-800 shadow-lg">
          <li className="w-full border-b rounded-t-lg bg-gradient-to-r from-slate-500 to-gray-500 p-4 text-white font-bold text-lg">
              Price
          </li>
          <li className="w-full border-b rounded-lg bg-primary-100 p-4 text-primary-700 dark:bg-slate-900 dark:text-primary-500 flex flex-col gap-3">
            <Slider
              className="w-full"
              onValueChange={(value) => handleSliderChange(value[0])}
              value={[sliderValue]}
              min={0}
              max={22000}
              step={100}
            />
            <span className="text-gray-800 dark:text-gray-300 text-lg">
              Range: 0dh - {sliderValue.toFixed(2)}dh
            </span>
          </li>
        </ul>
      </div>

      {/* Operating System */}
      <div>
        <ul className="w-full text-surface dark:text-white border rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <li className="w-full border-b rounded-t-lg bg-gradient-to-r from-slate-500 to-gray-500 p-4 text-white font-bold text-lg">
            Operating System
          </li>
          {operatingSystems.map((os, index) => (
            <li
              key={index}
              className="w-full border-b rounded-lg bg-primary-100 p-4 text-primary-700 dark:bg-slate-900 dark:text-primary-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                {os.icon} {os.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Color */}
      <div>
  <ul className="w-full text-surface dark:text-white border rounded-lg shadow-lg bg-white dark:bg-gray-800">
    <li className="w-full border-b rounded-t-lg bg-gradient-to-r from-slate-500 to-gray-500 p-4 text-white font-bold text-lg">
      Color
    </li>
    {colors.map((color, index) => (
      <li
        key={index}
        className="w-full flex gap-2 items-center border-b rounded-lg bg-primary-100 p-4 text-primary-700 dark:bg-slate-900 dark:text-primary-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors cursor-pointer"
      >
        <div
          className=" border w-5 h-5 rounded-full"
          style={{ backgroundColor: color.code }} // Afficher la couleur réelle ici
        ></div>
        <span className="flex items-center gap-2 text-sm">
          {color.name} <span className="text-xs text-gray-500"></span>
        </span>
      </li>
    ))}
  </ul>
</div>

      {/* Size */}
      <div>
        <ul className="w-full text-surface dark:text-white border rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <li className="w-full border-b rounded-t-lg bg-gradient-to-r from-slate-500 to-gray-500 p-4 text-white font-bold text-lg">
            Size
          </li>
          {sizes.map((size, index) => (
            <li
              key={index}
              className="w-full border-b rounded-lg bg-primary-100 p-4 text-primary-700 dark:bg-slate-900 dark:text-primary-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <GiSmartphone className="text-black" /> {size}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating */}
      <div>
        <ul className="w-full text-surface dark:text-white border rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <li className="w-full border-b rounded-t-lg bg-gradient-to-r from-slate-500 to-gray-500 p-4 text-white font-bold text-lg">
            Rating
          </li>
          {ratings.map((rating, index) => (
            <li
              key={index}
              className="w-full border-b rounded-lg bg-primary-100 p-4 text-primary-700 dark:bg-slate-900 dark:text-primary-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                {[...Array(5 - rating)].map((_, i) => (
                  <FaStarHalfAlt key={i} className="text-gray-400" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterBox;
