import React from "react";
import { useDispatch } from "react-redux";
import { sortProducts } from "@/slicers/shopSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImSortAlphaAsc, ImSortAlphaDesc } from "react-icons/im";

const DropdownButton = () => {
  const dispatch = useDispatch();

  const handleSortChange = (value) => {
    dispatch(sortProducts({ order: value }));
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
