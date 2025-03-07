import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/im";
const DropdownButton = ({ products, setFilteredProducts }) => {
  const handleSortChange = (value) => {
    let sortedProducts;
    if (value === "Croissant") {
      sortedProducts = [...products].sort((a, b) => a.price - b.price); // Sort ascending
    } else if (value === "Décroissant") {
      sortedProducts = [...products].sort((a, b) => b.price - a.price); // Sort descending
    }
    setFilteredProducts(sortedProducts); // Update the filtered products list
  };

  return (
    <Select onValueChange={handleSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Croissant">
          <div className="flex gap-2 items-center">
            <ImSortAlphaAsc />
            Croissant
          </div>
        </SelectItem>
        <SelectItem value="Décroissant">
          <div className="flex gap-2 items-center">
            <ImSortAlphaDesc />
            Décroissant
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DropdownButton;
