
import FilterBox from "@/assets/sous-components/FilterBox";
import ShopSection from "./ShopSection";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "@/slicers/shopSlice";
import { useState } from "react";

const ShopBox = () => {
  const dispatch = useDispatch();
  const [showMobileFilter, setShowMobileFilter] = useState(true);

  return (
    <>
      <div className="w-full flex md:flex-row flex-col my-24 mx-4">
        <FilterBox />
        <ShopSection handleShowMobileFilter={() => setShowMobileFilter((prev) => !prev)}/>
      </div>
      {/* Mobile Filter */}
      <div
        className={`bg-white ${
          showMobileFilter ? "hidden" : "mobile-filters"
        } z-50 md:hidden w-full h-screen fixed top-0 flex-col px-5`}
      >
        <IoCloseSharp
          onClick={() => setShowMobileFilter(true)}
          size={30}
          className="text-gray-500 cursor-pointer z-50 absolute top-4 right-6"
        />
        <h1 className="text-black z-50 py-10 text-center text-2xl font-semibold">
          Filter
        </h1>
        <FilterBox />
      </div>
    </>
  );
};

export default ShopBox;
