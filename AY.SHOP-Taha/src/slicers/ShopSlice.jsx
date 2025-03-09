import { createSlice } from "@reduxjs/toolkit";
import productsAll from "@/data/productsALL";

const initialState = {
  filters: {
    category: "",
    size: "",
    color: "",
    rating: "",
    operatingSystem: "",
    sliderValue: 0,
  },
  filteredProducts: productsAll,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredProducts = productsAll.filter((product) =>
        Object.keys(state.filters).every((key) =>
          state.filters[key] ? product[key] === state.filters[key] : true
        )
      );
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredProducts = productsAll;
    },
    sortProducts: (state, action) => {
      const { order } = action.payload;
      if (order === "Croissant") {
        state.filteredProducts = [...state.filteredProducts].sort(
          (a, b) => a.price - b.price
        );
      } else if (order === "Décroissant") {
        state.filteredProducts = [...state.filteredProducts].sort(
          (a, b) => b.price - a.price
        );
      }
    },
  },
});

export const { setFilter, resetFilters, sortProducts } = shopSlice.actions;
export default shopSlice.reducer;
